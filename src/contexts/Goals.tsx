import { createContext } from "use-context-selector";
import { GoalType } from "../types/goal";
import { Dispatch } from "react";

type DispatchType = Dispatch<React.SetStateAction<GoalType[] | []>>;

export const GoalsContext = createContext<[GoalType[] | [], DispatchType]>([
  [],
  () => null,
]);
