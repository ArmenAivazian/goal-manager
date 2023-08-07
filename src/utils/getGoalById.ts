import { GoalType } from "../types/goal";

export function getGoalById(id: string, goal: GoalType): GoalType | null {
  if (!goal) return null;

  if (goal.id === id) return goal;

  if (goal.children?.length) {
    for (const child of goal.children) {
      const result = getGoalById(id, child);

      if (result) return result;
    }
  }

  return null;
}
