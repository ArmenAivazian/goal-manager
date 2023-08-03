import { useState } from "react";
import classes from "./Header.module.scss";
import { HeaderProps } from "./Header.types";
import { Logo } from "./components/Logo";

import { getGoals, getUniqueKey, setGoalsToLS } from "../../utils";
import { useContextSelector } from "use-context-selector";
import { GoalContext } from "../../contexts/Goal";

export function Header({
  isListGoalsPage,
  shownButtonBack,
  onBackButtonClick,
  setIsListGoalsPage,
}: HeaderProps) {
  const [goal, setGoal] = useContextSelector(GoalContext, (goal) => goal);

  const [inputValue, setInputValue] = useState("");

  function handleCreateButtonClick() {
    const newGoal = { id: getUniqueKey(), name: inputValue };
    setGoalsToLS([...getGoals(), newGoal]);
    setGoal(newGoal);
    setIsListGoalsPage(false);
    setInputValue("");
  }

  return (
    <header className={classes.header}>
      {goal && (
        <Logo
          isListGoalsPage={isListGoalsPage}
          setIsListGoalsPage={() => setIsListGoalsPage(!isListGoalsPage)}
        />
      )}
      {shownButtonBack && <button onClick={onBackButtonClick}>Back</button>}
      {isListGoalsPage && (
        <form className={classes.create} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="create-goal"
            className={classes.input}
            value={inputValue}
            onChange={({ target: { value } }) => setInputValue(value)}
          />
          <button onClick={handleCreateButtonClick}>Create</button>
        </form>
      )}
    </header>
  );
}
