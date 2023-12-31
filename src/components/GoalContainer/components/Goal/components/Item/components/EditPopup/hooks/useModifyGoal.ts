import { Action, GoalNewValue } from "../EditPopup.types";
import { GoalContext } from "../../../../../../../../../contexts/Goal";
import { getUpdatedGoal, updateGoal } from "../utils";
import { formattedGoal } from "../../../../../../../../../utils";
import { useSetContext } from "../../../../../../../../../hooks/useContext";

export function useModifyGoal(id: string) {
  const setGoal = useSetContext(GoalContext);

  return (action: Action) => {
    return (newValue: GoalNewValue) => {
      setGoal((prevGoal) => {
        if (!prevGoal) return prevGoal;
        const goal = getUpdatedGoal(action, prevGoal, id, newValue);
        const newGoal = formattedGoal(goal);

        updateGoal(prevGoal, newGoal);
        return newGoal;
      });
    };
  };
}
