import { useState } from "react";
import classes from "./Header.module.scss";
import { HeaderProps } from "./Header.types";
import { Logo } from "./components/Logo";
import { GoalContext } from "../../contexts/Goal";
import { CurrentPageContext } from "../../contexts/CurrentPage";
import { useGetContext } from "../../hooks/useContext";
import { useCreateGoal } from "./hooks";

export function Header({
  isHaveSelectedGoal,
  isGoalsListEmpty,
  onBackButtonClick,
}: HeaderProps) {
  const currentPage = useGetContext(CurrentPageContext);
  const goal = useGetContext(GoalContext);

  const [inputValue, setInputValue] = useState("");

  const onCreate = useCreateGoal(inputValue, setInputValue);

  const shownButtonBack = !!(isHaveSelectedGoal && currentPage === "goal");

  return (
    <header
      className={`${classes.header} ${
        isGoalsListEmpty ? classes.centered : classes.top
      }`}
    >
      {goal && <Logo />}
      {shownButtonBack && <button onClick={onBackButtonClick}>Back</button>}
      {currentPage === "main" && (
        <form className={classes.form} onSubmit={onCreate}>
          {isGoalsListEmpty && (
            <h1 className={classes.placeholder}>enter your first goal:</h1>
          )}
          <input
            type="text"
            name="create-goal"
            className={classes.input}
            value={inputValue}
            onChange={({ target: { value } }) => setInputValue(value)}
            {...(!isGoalsListEmpty && {
              placeholder: "enter your new goal...",
            })}
          />
        </form>
      )}
    </header>
  );
}
