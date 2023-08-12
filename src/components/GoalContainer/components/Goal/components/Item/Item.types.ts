import { GoalType } from "../../../../../../types/goal";

export interface ItemProps extends GoalType {
  canChangeProgress?: boolean;
  canChangeImportance?: boolean;
  addSubGoalWithImportance?: boolean;
  onDbClick?: () => void;
}
