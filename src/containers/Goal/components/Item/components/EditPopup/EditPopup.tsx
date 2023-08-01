import { useEffect, useState } from "react";
import classes from "./EditPopup.module.scss";
import { EditPopupProps } from "./EditPopup.types";
import { useContextSelector } from "use-context-selector";
import { GoalsContext } from "../../../../../../contexts/Goals";
import { getUpdatedGoals } from "./utils";

export function EditPopup({ id, name, setGoalName, onClose }: EditPopupProps) {
  const setGoals = useContextSelector(GoalsContext, (goals) => goals[1]);

  const [inputValue, setInputValue] = useState(name);

  function handleEditName() {
    setGoalName(inputValue);
    setGoals((prevGoals) => {
      const newGoals = getUpdatedGoals(prevGoals, id, inputValue);
      localStorage.setItem("goals", JSON.stringify(newGoals));
      return newGoals;
    });
  }

  useEffect(() => {
    const listener = ({ key }: KeyboardEvent) => key === "Escape" && onClose();
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [onClose]);

  return (
    <dialog className={classes.wrapper} open>
      <form className={classes.line} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="goal-name">Name:</label>
        <input
          id="goal-name"
          type="text"
          name="create-goal"
          className={classes.input}
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
        />
        <button onClick={handleEditName}>Edit</button>
      </form>
    </dialog>
  );
}
