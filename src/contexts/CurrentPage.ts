import { createContext } from "use-context-selector";
import { Dispatch } from "react";

export type CurrentPage = "main" | "goal";
type DispatchPage = Dispatch<React.SetStateAction<CurrentPage>>;

export const CurrentPageContext = createContext<[CurrentPage, DispatchPage]>([
  "main",
  () => null,
]);
