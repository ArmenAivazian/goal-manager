import { useEffect } from "react";
import classes from "./EditPopup.module.scss";
import { Action, EditPopupProps } from "./EditPopup.types";
import { useContextSelector } from "use-context-selector";
import { GoalContext } from "../../../../../../contexts/Goal";
import { getUpdatedGoal, updateGoal } from "./utils";
import { Field } from "./components/Field";

export function EditPopup({ id, name, onClose }: EditPopupProps) {
  const setGoal = useContextSelector(GoalContext, (goal) => goal[1]);

  function modifyGoal(action: Action) {
    return (newValue: string) => {
      setGoal((prevGoal) => {
        if (!prevGoal) return prevGoal;
        const newGoal = getUpdatedGoal(action, prevGoal, id, newValue);
        updateGoal(prevGoal, newGoal);
        return newGoal;
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
        onSubmit={modifyGoal("edit")}
      />
      <Field
        label="Add sub-goal"
        buttonName="Add"
        onSubmit={modifyGoal("add")}
        clearAfterSubmit
      />
    </dialog>
  );
}
