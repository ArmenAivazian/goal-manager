import { Goal } from "../../Goals.types";

export interface ItemProps extends Pick<Goal, "name" | "progress"> {
  onDbClick?: () => void;
}
