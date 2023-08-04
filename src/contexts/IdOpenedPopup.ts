import { createContext } from "use-context-selector";

type Value = string | null;
type DispatchType = (value: Value) => void;

export const IdOpenedPopup = createContext<[Value, DispatchType]>([
  null,
  () => null,
]);
