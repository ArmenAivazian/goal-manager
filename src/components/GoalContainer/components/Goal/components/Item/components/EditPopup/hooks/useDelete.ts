import { formattedGoal, getGoalById } from "../../../../../../../../../utils";
import { useSetContext } from "../../../../../../../../../hooks/useContext";
import { GoalContext } from "../../../../../../../../../contexts/Goal";
import { deleteGoal } from "../../../../../../../../../utils/deleteGoal";
import { updateGoal } from "../utils";

export function useDelete(id: string) {
  const setGoal = useSetContext(GoalContext);

  function onDelete() {
    setGoal((prev) => {
      if (!prev) return prev;
      const goal = getGoalById(id, prev);

      if (!goal) return prev;

      const newGoal = deleteGoal(goal, prev);
      updateGoal(prev, newGoal);
      return formattedGoal(newGoal);
    });
  }

  return onDelete;
}
