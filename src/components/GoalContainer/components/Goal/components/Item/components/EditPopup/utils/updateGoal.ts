import { GoalType } from "../../../../../../../../../types/goal";
import { getGoals } from "../../../../../../../../../utils";

function childrenSearch(prevGoal: GoalType, newGoal: GoalType, id: string) {
  if (id === prevGoal.id) return newGoal;

  prevGoal.children?.map((goal) => childrenSearch(goal, newGoal, id));

  return prevGoal;
}

export function updateGoal(prevGoal: GoalType, newGoal: GoalType) {
  const goals = getGoals();
  const id = prevGoal.id;

  const newGoals = goals?.map((goal) => childrenSearch(goal, newGoal, id));

  localStorage.setItem("goals", JSON.stringify(newGoals));
}
