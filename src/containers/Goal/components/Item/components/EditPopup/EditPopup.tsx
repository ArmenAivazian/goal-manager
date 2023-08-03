import { useEffect } from "react";
import classes from "./EditPopup.module.scss";
import { Action, EditPopupProps } from "./EditPopup.types";
import { useContextSelector } from "use-context-selector";
import { GoalContext } from "../../../../../../contexts/Goal";
import { getUpdatedGoal, updateGoal } from "./utils";
import { Field } from "./components/Field";
import { formattedGoal } from "../../../../../../utils";

export function EditPopup({
  id,
  name,
  canChangeProgress,
  progress,
  onClose,
}: EditPopupProps) {
  const setGoal = useContextSelector(GoalContext, (goal) => goal[1]);

  function modifyGoal(action: Action) {
    return (newValue: string) => {
      setGoal((prevGoal) => {
        if (!prevGoal) return prevGoal;
        const newGoal = getUpdatedGoal(action, prevGoal, id, newValue);
        updateGoal(prevGoal, newGoal);
        return formattedGoal(newGoal);
      });
    };
  }

  useEffect(() => {
    const listener = ({ key }: KeyboardEvent) => key === "Escape" && onClose();
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [onClose]);

  return (
    <dialog className={classes.wrapper} open>
      <Field
        label="Name"
        buttonName="Edit"
        initValue={name}
        onSubmit={modifyGoal({ type: "edit", field: "name" })}
      />
      <Field
        label="Add sub-goal"
        buttonName="Add"
        onSubmit={modifyGoal("add")}
        clearAfterSubmit
      />
      {canChangeProgress && (
        <Field
          label="Progress"
          buttonName="Submit"
          type="range"
          onSubmit={modifyGoal({ type: "edit", field: "progress" })}
          initValue={`${(progress || 0) * 100}`}
        />
      )}
    </dialog>
  );
}
