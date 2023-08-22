import classes from "./GoalContainer.module.scss";
import { GoalContainerProps } from "./Goal.types";

import { Goal } from "./components/Goal";
import { GoalContext } from "../../contexts/Goal";
import { Item } from "./components/Goal/components/Item";
import { useGetContext } from "../../hooks/useContext";
import { useEffect } from "react";
import { getGoalById } from "../../utils";

export function GoalContainer({
  selectedGoal,
  setSelectedGoal,
}: GoalContainerProps) {
  const initGoal = useGetContext(GoalContext);

  useEffect(() => {
    if (selectedGoal && initGoal) {
      setSelectedGoal(getGoalById(selectedGoal.id, initGoal));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initGoal]);

  const goal = selectedGoal || initGoal;

  if (!goal) return <></>;

  const isOnlyMainGoal = !Array.isArray(goal) && !goal.children;

  return (
    <div className={classes.wrapper}>
      {isOnlyMainGoal ? (
        <Item {...goal} canChangeProgress />
      ) : (
        <Goal goal={goal} setSelectedGoal={setSelectedGoal} />
      )}
    </div>
  );
}
