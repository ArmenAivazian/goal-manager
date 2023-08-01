import { GoalType } from "../types/goal";

export function getGoals(): GoalType[] | [] {
  const goalsLS = localStorage.getItem("goals");

  return goalsLS ? JSON.parse(goalsLS) : [];
}
