import { GoalType } from "../types/goal";

export function deleteGoal(targetGoal: GoalType, goal: GoalType) {
  if (goal.id === targetGoal.id) return null;

  if (goal.children) {
    const children = goal.children.filter((child): GoalType | null =>
      deleteGoal(targetGoal, child)
    );

    if (!children?.length) delete goal.children;

    return { ...goal, ...(children?.length && { children }) };
  }

  return goal;
}
