import { GoalType } from "../../../../../../../../../types/goal";
import { getGoals } from "../../../../../../../../../utils";

function childrenSearch(prevGoal: GoalType, newGoal: GoalType, id: string) {
  if (id === prevGoal.id) return newGoal;

  prevGoal.children?.map((goal) => childrenSearch(goal, newGoal, id));

  return prevGoal;
}

function getNewGoals(goals: GoalType[], id: string, newGoal: GoalType | null) {
  if (newGoal) return goals.map((goal) => childrenSearch(goal, newGoal, id));

  return goals.filter((goal) => goal.id !== id);
}

export function updateGoal(prevGoal: GoalType, newGoal: GoalType | null) {
  const goals = getGoals();
  const id = prevGoal.id;

  const newGoals = getNewGoals(goals, id, newGoal);

  localStorage.setItem("goals", JSON.stringify(newGoals));
}
