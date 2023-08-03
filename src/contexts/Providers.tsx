import { ReactNode, useState } from "react";
import { GoalContext } from "./Goal";
import { GoalType } from "../types/goal";

export function ContextProviders({ children }: { children: ReactNode }) {
  return (
    <GoalContext.Provider value={useState<GoalType | null>(null)}>
      {children}
    </GoalContext.Provider>
  );
}
