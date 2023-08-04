import { createContext } from "use-context-selector";
import { GoalType } from "../types/goal";

type Value = GoalType | null;
type DispatchType = (value: Value) => void;

export const GoalContext = createContext<[Value, DispatchType]>([
  null,
  () => null,
]);
