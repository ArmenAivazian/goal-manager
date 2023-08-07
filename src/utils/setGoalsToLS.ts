import { GoalType } from "../types/goal";
import { LocalStorageKeys } from "../types/localStorageKeys";

export function setGoalsToLS(goals: GoalType[]) {
  localStorage.setItem(LocalStorageKeys.Goals, JSON.stringify(goals));
}
