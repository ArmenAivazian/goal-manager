import classes from "./GoalContainer.module.scss";
import { GoalContainerProps } from "./Goal.types";

import { Goal } from "./components/Goal";
import { GoalContext } from "../../contexts/Goal";
import { Item } from "./components/Goal/components/Item";
import { useGetContext } from "../../hooks/useContext";

export function GoalContainer({
  selectedGoal,
  setSelectedGoal,
}: GoalContainerProps) {
  const initGoal = useGetContext(GoalContext);

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
