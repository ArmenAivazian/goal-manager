import { formattedGoal, getGoalById } from "../../../../../../../../../utils";
import { useSetContext } from "../../../../../../../../../hooks/useContext";
import { GoalContext } from "../../../../../../../../../contexts/Goal";
import { deleteGoal } from "../../../../../../../../../utils/deleteGoal";
import { updateGoal } from "../utils";
import { CurrentPageContext } from "../../../../../../../../../contexts/CurrentPage";
import { LocalStorageKeys } from "../../../../../../../../../types/localStorageKeys";
import { Routes } from "../../../../../../../../../types/routes";

export function useRemove(id: string) {
  const setCurrentPage = useSetContext(CurrentPageContext);
  const setGoal = useSetContext(GoalContext);

  function onRemove(type: "delete" | "reject") {
    setGoal((prev) => {
      if (!prev) return prev;

      const goal = getGoalById(id, prev);

      if (!goal) return prev;

      if (type === "reject") {
        const rejects = JSON.parse(
          localStorage.getItem(LocalStorageKeys.Rejects) || "[]"
        );

        rejects.push(goal);

        localStorage.setItem(LocalStorageKeys.Rejects, JSON.stringify(rejects));
      }

      const newGoal = deleteGoal(goal, prev);

      if (!newGoal) setCurrentPage(Routes.Main);

      const formattedNewGoal = formattedGoal(newGoal);

      updateGoal(prev, formattedNewGoal);

      return formattedNewGoal;
    });
  }

  return onRemove;
}
