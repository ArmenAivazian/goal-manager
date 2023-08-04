import { GoalType } from "../../../../types/goal";

export interface GoalProps {
  goal?: GoalType | GoalType[];
  setSelectedGoal: (value: GoalType | null) => void;
}
