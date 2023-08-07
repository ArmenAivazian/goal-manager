import { useState } from "react";
import classes from "./Header.module.scss";
import { HeaderProps } from "./Header.types";
import { Logo } from "./components/Logo";
import { getGoals, getUniqueKey, setGoalsToLS } from "../../utils";
import { GoalContext } from "../../contexts/Goal";
import { useContext } from "../../hooks";
import { CurrentPageContext } from "../../contexts/CurrentPage";

export function Header({ isHaveSelectedGoal, onBackButtonClick }: HeaderProps) {
  const [currentPage, setCurrentPage] = useContext(CurrentPageContext);
  const [goal, setGoal] = useContext(GoalContext);

  const [inputValue, setInputValue] = useState("");

  function handleCreateButtonClick() {
    const newGoal = { id: getUniqueKey(), name: inputValue };
    setGoalsToLS([...getGoals(), newGoal]);
    setGoal(newGoal);
    setCurrentPage("goal");
    setInputValue("");
  }

  const shownButtonBack = !!(isHaveSelectedGoal && !currentPage);

  return (
    <header className={classes.header}>
      {goal && <Logo />}
      {shownButtonBack && <button onClick={onBackButtonClick}>Back</button>}
      {currentPage === 'main' && (
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
