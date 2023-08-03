import { createContext } from "use-context-selector";
import { GoalType } from "../types/goal";
import { Dispatch } from "react";

type DispatchType = Dispatch<React.SetStateAction<GoalType | null>>;

export const GoalContext = createContext<[GoalType | null, DispatchType]>([
  null,
  () => null,
]);
