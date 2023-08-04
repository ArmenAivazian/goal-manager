import { GoalType } from "../../types/goal";

export interface GoalProps {
  goal?: GoalType | GoalType[];
  selectedGoal?: GoalType | null;
  setSelectedGoal: (value: GoalType | null) => void;
}
