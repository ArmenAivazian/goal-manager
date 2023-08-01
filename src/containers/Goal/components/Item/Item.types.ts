import { GoalType } from "../../../../types/goal";

export interface ItemProps extends Pick<GoalType, "name" | "progress"> {
  onDbClick?: () => void;
}
