import { useEffect } from "react";
import classes from "./EditPopup.module.scss";
import { EditPopupProps } from "./EditPopup.types";
import { Field } from "./components/Field";
import { useDelete, useModifyGoal } from "./hooks";
import { TextEditor } from "./components/TextEditor";

export function EditPopup({
  id,
  name,
  canChangeProgress,
  canChangeImportance,
  addSubGoalWithImportance,
  importance,
  progress,
  notes,
  onClose,
}: EditPopupProps) {
  const onDelete = useDelete(id);
  const modifyGoal = useModifyGoal(id);

  useEffect(() => {
    const listener = ({ key }: KeyboardEvent) => key === "Escape" && onClose();
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [onClose]);

  return (
    <dialog className={classes.wrapper} open>
      <TextEditor
        initialValue={notes}
        onBlur={modifyGoal({ type: "edit", field: "notes" })}
      />
      <Field
        label="Name"
        buttonName="Edit"
        initValue={name}
        onSubmit={modifyGoal({ type: "edit", field: "name" })}
      />
      {canChangeProgress && (
        <Field
          label="Progress"
          buttonName="Change"
          type="range"
          onSubmit={modifyGoal({ type: "edit", field: "progress" })}
          initValue={`${progress || 0}`}
        />
      )}
      {canChangeImportance && (
        <Field
          label="Importance"
          buttonName="Change"
          initValue={`${importance || 0}`}
          onSubmit={modifyGoal({ type: "edit", field: "importance" })}
          type="range"
        />
      )}
      <Field
        label="Add sub-goal"
        buttonName="Add"
        onSubmit={modifyGoal("add")}
        clearAfterSubmit
        withImportance={addSubGoalWithImportance}
      />
      <button className={classes.button} onClick={onDelete}>
        Delete
      </button>
    </dialog>
  );
}
