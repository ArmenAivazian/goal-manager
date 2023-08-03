import { GoalType } from "../../../../types/goal";

export interface ItemProps extends GoalType {
  canChangeProgress?: boolean;
  onDbClick?: () => void;
}
