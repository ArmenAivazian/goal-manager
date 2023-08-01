import { useState } from "react";
import classes from "./Header.module.scss";
import { HeaderProps } from "./Header.types";
import { Logo } from "./components/Logo";

export function Header({
  goal,
  isListGoalsPage,
  shownButtonBack,
  goals,
  onBackButtonClick,
  setIsListGoalsPage,
  setGoals,
  setGoal,
}: HeaderProps) {
  const [inputValue, setInputValue] = useState("");

  function handleCreateButtonClick() {
    const newGoal = { name: inputValue };
    const newList = [...goals, newGoal];

    setGoals(newList);
    setGoal(newGoal);
    setIsListGoalsPage(false);

    localStorage.setItem("goals", JSON.stringify(newList));
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
        <div className={classes.button}>
          <input
            type="text"
            name="create-goal"
            className={classes.input}
            value={inputValue}
            onChange={({ target: { value } }) => setInputValue(value)}
          />
          <button onClick={handleCreateButtonClick}>Create</button>
        </div>
      )}
    </header>
  );
}
