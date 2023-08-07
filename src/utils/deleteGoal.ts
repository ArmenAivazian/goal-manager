import { GoalType } from "../types/goal";

export function deleteGoal(targetGoal: GoalType, goal: GoalType) {
  const isTargetGoal = goal.id === targetGoal.id;

  if (isTargetGoal) return null;

  if (goal.children) {
    const children: GoalType[] = [];

    for (const child of goal.children) {
      const modifiedChild = deleteGoal(targetGoal, child);

      if (modifiedChild) children.push(modifiedChild);
    }

    return children.length
      ? { ...goal, children }
      : { ...goal, children: undefined };
  }

  return goal;
}
