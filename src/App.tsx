import { useState } from "react";
import { Header } from "./components/Header";
import { GoalType } from "./types/goal";
import { GoalsList } from "./components/GoalsList";
import { GoalContainer } from "./components/GoalContainer";
import { useGetContext } from "./hooks/useContext";
import { CurrentPageContext } from "./contexts/CurrentPage";
import { getGoals } from "./utils";
import classes from "./App.module.scss";
import { IdOpenedPopup } from "./contexts/IdOpenedPopup";
import { RejectList } from "./pages";
import { Routes } from "./types/routes";

function App() {
  const currentPage = useGetContext(CurrentPageContext);
  const idOpenedPopup = useGetContext(IdOpenedPopup);

  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null);

  const isGoalsListEmpty = !getGoals().length;
  const shownGoalsList = currentPage === Routes.Main && !isGoalsListEmpty;

  return (
    <>
      <Header
        isHaveSelectedGoal={!!selectedGoal}
        onBackButtonClick={() => setSelectedGoal(null)}
        isGoalsListEmpty={isGoalsListEmpty}
      />

      {shownGoalsList && <GoalsList setSelectedGoal={setSelectedGoal} />}

      {currentPage === Routes.Goal && (
        <div className={classes.wrapper}>
          <div
            className={`${classes["inner-wrapper"]} ${
              idOpenedPopup && classes["with-padding"]
            }`}
          >
            <GoalContainer
              selectedGoal={selectedGoal}
              setSelectedGoal={setSelectedGoal}
            />
          </div>
        </div>
      )}

      {currentPage === Routes.Reject && <RejectList />}
    </>
  );
}

export default App;
