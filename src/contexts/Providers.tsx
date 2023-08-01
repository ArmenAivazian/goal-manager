import { ReactNode, useState } from "react";
import { GoalsContext } from "./Goals";
import { getGoals } from "../utils";

export function ContextProviders({ children }: { children: ReactNode }) {
  return (
    <GoalsContext.Provider value={useState(getGoals())}>
      {children}
    </GoalsContext.Provider>
  );
}
