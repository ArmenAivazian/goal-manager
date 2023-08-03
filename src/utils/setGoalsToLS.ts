import { GoalType } from "../types/goal";

export function setGoalsToLS(goals: GoalType[]) {
    localStorage.setItem('goals', JSON.stringify(goals));
}