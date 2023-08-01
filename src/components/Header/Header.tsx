import { useState } from "react";
import classes from "./Header.module.scss";
import { HeaderProps } from "./Header.types";
import { Logo } from "./components/Logo";
import { useContextSelector } from "use-context-selector";
import { GoalsContext } from "../../contexts/Goals";
import { getUniqueKey } from "../../utils";

export function Header({
  goal,
  isListGoalsPage,
  shownButtonBack,
  onBackButtonClick,
  setIsListGoalsPage,
  setGoal,
}: HeaderProps) {
  const setGoals = useContextSelector(GoalsContext, (goals) => goals[1]);

  const [inputValue, setInputValue] = useState("");

  function handleCreateButtonClick() {
    const newGoal = { id: getUniqueKey(), name: inputValue };

    setGoals((prevGoals) => {
      const newList = [...prevGoals, newGoal];
      localStorage.setItem("goals", JSON.stringify(newList));
      return newList;
    });
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
