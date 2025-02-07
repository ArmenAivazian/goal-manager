import { createContext } from "use-context-selector";
import { Dispatch } from "react";
import { Routes } from "../types/routes";

type DispatchPage = Dispatch<React.SetStateAction<Routes>>;

export const CurrentPageContext = createContext<[Routes, DispatchPage]>([
  Routes.Main,
  () => null,
]);
