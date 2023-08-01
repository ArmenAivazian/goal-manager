import { Goal } from "./containers/Goal";
import classes from "./App.module.scss";
import { useState } from "react";

import { Header } from "./components/Header";
import { GoalType } from "./types/goal";
import { GoalsList } from "./components/GoalsList";

function App() {
  const [goal, setGoal] = useState<GoalType | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null);
  const [isListGoalsPage, setIsListGoalsPage] = useState(true);

  const shownButtonBack = !!(selectedGoal && !isListGoalsPage);

  return (
    <>
      <Header
        goal={goal}
        isListGoalsPage={isListGoalsPage}
        shownButtonBack={shownButtonBack}
        setGoal={setGoal}
        setIsListGoalsPage={setIsListGoalsPage}
        onBackButtonClick={() => setSelectedGoal(null)}
      />
      {isListGoalsPage ? (
        <GoalsList
          setGoal={setGoal}
          setSelectedGoal={setSelectedGoal}
          setIsListGoalsPage={setIsListGoalsPage}
        />
      ) : (
        <div className={classes.wrapper}>
          <Goal
            goal={goal!}
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
          />
        </div>
      )}
    </>
  );
}

export default App;
