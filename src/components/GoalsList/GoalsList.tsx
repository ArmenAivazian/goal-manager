import { useContextSelector } from "use-context-selector";
import { GoalType } from "../../types/goal";
import { formattedGoal } from "../../utils";
import classes from "./GoalsList.module.scss";
import { GoalsListProps } from "./GoalsList.types";
import { GoalsContext } from "../../contexts/Goals";

export function GoalsList({
  setGoal,
  setSelectedGoal,
  setIsListGoalsPage,
}: GoalsListProps) {
  const goals = useContextSelector(GoalsContext, (goals) => goals[0]);

  function handleGoalButtonClick(goal: GoalType) {
    setGoal(goal);
    setSelectedGoal(null);
    setIsListGoalsPage(false);
  }

  return (
    <div className={classes.wrapper}>
      {goals.map((goal) => {
        const fullData = formattedGoal(goal);

        if (!fullData) return <></>;

        const { name, progress } = fullData;
        const percents = `${progress ? progress * 100 : 0}%`;

        return (
          <button
            className={classes.button}
            key={name}
            onClick={() => handleGoalButtonClick(fullData)}
          >
            {`${name} (${percents})`}
          </button>
        );
      })}
    </div>
  );
}
