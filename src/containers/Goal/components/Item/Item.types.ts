import { GoalType } from "../../../../types/goal";

export interface ItemProps extends GoalType {
  onDbClick?: () => void;
}
