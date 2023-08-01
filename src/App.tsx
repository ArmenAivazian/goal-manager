import { Goal } from "./containers/Goal";
import { formattedGoal, getGoals } from "./utils";
import classes from "./App.module.scss";
import { useState } from "react";

import { Header } from "./components/Header";
import { GoalType } from "./types/goal";
import { GoalsList } from "./components/GoalsList";

function App() {
  const [goals, setGoals] = useState(getGoals());
  const [goal, setGoal] = useState<GoalType | null>(formattedGoal(goals[0]));
  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null);
  const [isListGoalsPage, setIsListGoalsPage] = useState(!goals?.length);

  const shownButtonBack = !!(selectedGoal && !isListGoalsPage);

  return (
    <>
      <Header
        goals={goals}
        goal={goal}
        isListGoalsPage={isListGoalsPage}
        shownButtonBack={shownButtonBack}
        setGoals={setGoals}
        setGoal={setGoal}
        setIsListGoalsPage={setIsListGoalsPage}
        onBackButtonClick={() => setSelectedGoal(null)}
      />
      {isListGoalsPage ? (
        <GoalsList
          goals={goals}
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
