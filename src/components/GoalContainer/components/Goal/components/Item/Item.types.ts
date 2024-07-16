import { GoalType } from "../../../../../../types/goal";

export interface ItemProps extends GoalType {
  canChangeProgress?: boolean;
  canChangeImportance?: boolean;
  childInitImportance?: string;
  onDbClick?: () => void;
}
