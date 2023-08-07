import { GoalType } from "../types/goal";
import { LocalStorageKeys } from "../types/localStorageKeys";

export function getGoals(): GoalType[] | [] {
  const goalsLS = localStorage.getItem(LocalStorageKeys.Goals);

  return goalsLS ? JSON.parse(goalsLS) : [];
}
