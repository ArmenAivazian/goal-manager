import { GoalType } from "../../types/goal";
import { formattedGoal, getGoals } from "../../utils";
import classes from "./GoalsList.module.scss";
import { GoalsListProps } from "./GoalsList.types";
import { GoalContext } from "../../contexts/Goal";
import { useSetContext } from "../../hooks/useContext";
import { CurrentPageContext } from "../../contexts/CurrentPage";

export function GoalsList({ setSelectedGoal }: GoalsListProps) {
  const setCurrentPage = useSetContext(CurrentPageContext);
  const setGoal = useSetContext(GoalContext);

  function handleGoalButtonClick(goal: GoalType) {
    setGoal(goal);
    setSelectedGoal(null);
    setCurrentPage("goal");
  }

  return (
    <div className={classes.wrapper}>
      {getGoals().map((goal) => {
        const fullData = formattedGoal(goal);

        if (!fullData) return <></>;

        const { name, progress } = fullData;
        const percents = `${progress ? progress * 100 : 0}%`;

        return (
          <button
            className={classes.button}
            key={goal.id}
            onClick={() => handleGoalButtonClick(fullData)}
          >
            {`${name} (${percents})`}
          </button>
        );
      })}
    </div>
  );
}
