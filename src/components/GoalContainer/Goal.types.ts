import { GoalType } from "../../types/goal";

export interface GoalContainerProps {
  selectedGoal?: GoalType | null;
  setSelectedGoal: (value: GoalType | null) => void;
}
