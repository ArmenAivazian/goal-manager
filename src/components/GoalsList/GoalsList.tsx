import { GoalType } from "../../types/goal";
import { formattedGoal, getGoals } from "../../utils";
import classes from "./GoalsList.module.scss";
import { GoalsListProps } from "./GoalsList.types";
import { GoalContext } from "../../contexts/Goal";
import { useSetContext } from "../../hooks/useContext";
import { CurrentPageContext } from "../../contexts/CurrentPage";
import { LocalStorageKeys } from "../../types/localStorageKeys";
import { Routes } from "../../types/routes";

export function GoalsList({ setSelectedGoal }: GoalsListProps) {
  const setCurrentPage = useSetContext(CurrentPageContext);
  const setGoal = useSetContext(GoalContext);

  function handleGoalButtonClick(goal: GoalType) {
    setGoal(goal);
    setSelectedGoal(null);
    setCurrentPage(Routes.Goal);
    localStorage.setItem(
      LocalStorageKeys.IdLastOpenedGoal,
      JSON.stringify(goal.id)
    );
  }

  return (
    <div className={classes.wrapper}>
      {getGoals().map((goal) => {
        const fullData = formattedGoal(goal);

        if (!fullData) return <></>;

        const { name, progress } = fullData;
        const percents = `${progress ? Math.floor(progress) : 0}%`;

        return (
          <button
            className={classes.button}
            key={goal.id}
            onClick={() => handleGoalButtonClick(fullData)}
          >
            <span className={classes.name}>{name}</span>
            <span>{percents}</span>
          </button>
        );
      })}
    </div>
  );
}
