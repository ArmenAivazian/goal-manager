import { useState } from "react";
import { Header } from "./components/Header";
import { GoalType } from "./types/goal";
import { GoalsList } from "./components/GoalsList";
import { GoalContainer } from "./components/GoalContainer";

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
        <GoalContainer
          selectedGoal={selectedGoal}
          setSelectedGoal={setSelectedGoal}
        />
      )}
    </>
  );
}

export default App;
