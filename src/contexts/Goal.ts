import { createContext } from "use-context-selector";
import { GoalType } from "../types/goal";
import { Dispatch } from "react";

type Goal = GoalType | null;
type DispatchGoal = Dispatch<React.SetStateAction<Goal>>;

export const GoalContext = createContext<[Goal, DispatchGoal]>([
  null,
  () => null,
]);
