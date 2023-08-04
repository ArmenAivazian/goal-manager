import { Goal } from "./components/Goal";
import classes from "./App.module.scss";
import { useState } from "react";

import { Header } from "./components/Header";
import { GoalType } from "./types/goal";
import { GoalsList } from "./components/GoalsList";

function App() {
  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null);
  const [isListGoalsPage, setIsListGoalsPage] = useState(true);

  const shownButtonBack = !!(selectedGoal && !isListGoalsPage);

  return (
    <>
      <Header
        isListGoalsPage={isListGoalsPage}
        shownButtonBack={shownButtonBack}
        setIsListGoalsPage={setIsListGoalsPage}
        onBackButtonClick={() => setSelectedGoal(null)}
      />
      {isListGoalsPage ? (
        <GoalsList
          setSelectedGoal={setSelectedGoal}
          setIsListGoalsPage={setIsListGoalsPage}
        />
      ) : (
        <div className={classes.wrapper}>
          <Goal selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal} />
        </div>
      )}
    </>
  );
}

export default App;
