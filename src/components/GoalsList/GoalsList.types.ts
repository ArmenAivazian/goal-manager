import { GoalType } from "../../types/goal";

export interface GoalsListProps {
  setSelectedGoal: (value: GoalType | null) => void;
}
