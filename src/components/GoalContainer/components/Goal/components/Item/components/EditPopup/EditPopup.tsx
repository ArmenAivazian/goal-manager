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
  childInitImportance,
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
        onChange={modifyGoal({ type: "edit", field: "notes" })}
      />
      <div className={classes.fields}>
        <Field
          label="Name"
          initValue={name}
          onSubmit={modifyGoal({ type: "edit", field: "name" })}
        />
        <Field
          label="Add sub-goal"
          buttonName="Add"
          onSubmit={modifyGoal("add")}
          clearAfterSubmit
          changeOnlyAfterSubmit
          {...(childInitImportance && { importance: childInitImportance })}
        />
        {canChangeProgress && (
          <Field
            label="Progress"
            type="range"
            onSubmit={modifyGoal({ type: "edit", field: "progress" })}
            initValue={`${progress || 0}`}
          />
        )}
        {canChangeImportance && (
          <Field
            label="Importance"
            initValue={`${importance || 0}`}
            onSubmit={modifyGoal({ type: "edit", field: "importance" })}
            type="range"
          />
        )}
      </div>
      <button className={classes.button} onClick={onDelete}>
        Delete
      </button>
    </dialog>
  );
}
