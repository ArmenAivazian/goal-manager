import { GoalType } from "../types/goal";
import { LocalStorageKeys } from "../types/localStorageKeys";

export function getGoals() {
  const goalsLS = localStorage.getItem(LocalStorageKeys.Goals);

  if (goalsLS) {
    const goals: GoalType[] = JSON.parse(goalsLS);

    return goals.map(({ importance, progress, ...params }) => ({
      ...params,
      ...(importance && { importance: Number(importance) }),
      ...(progress && { progress: Number(progress) }),
    }));
  }

  return [];
}
