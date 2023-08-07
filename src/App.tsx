import { useState } from "react";
import { Header } from "./components/Header";
import { GoalType } from "./types/goal";
import { GoalsList } from "./components/GoalsList";
import { GoalContainer } from "./components/GoalContainer";
import { useGetContext } from "./hooks/useContext";
import { CurrentPageContext } from "./contexts/CurrentPage";

function App() {
  const currentPage = useGetContext(CurrentPageContext);

  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null);

  return (
    <>
      <Header
        isHaveSelectedGoal={!!selectedGoal}
        onBackButtonClick={() => setSelectedGoal(null)}
      />
      {currentPage === "main" && (
        <GoalsList setSelectedGoal={setSelectedGoal} />
      )}
      {currentPage === "goal" && (
        <GoalContainer
          selectedGoal={selectedGoal}
          setSelectedGoal={setSelectedGoal}
        />
      )}
    </>
  );
}

export default App;
