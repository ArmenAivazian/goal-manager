import { GoalType } from "../../../../types/goal";

export interface GoalProps {
  goal?: GoalType | GoalType[];
  notOneChild?: boolean;
  setSelectedGoal: (value: GoalType | null) => void;
}
