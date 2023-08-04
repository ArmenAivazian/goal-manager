import { Dispatch } from "react";
import { createContext } from "use-context-selector";

type Id = string | null;
type DispatchId = Dispatch<React.SetStateAction<Id>>;

export const IdOpenedPopup = createContext<[Id, DispatchId]>([
  null,
  () => null,
]);
