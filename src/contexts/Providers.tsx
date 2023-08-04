import { ReactNode, useState } from "react";
import { GoalContext } from "./Goal";
import { GoalType } from "../types/goal";
import { IdOpenedPopup } from "./IdOpenedPopup";

export function ContextProviders({ children }: { children: ReactNode }) {
  return (
    <GoalContext.Provider value={useState<GoalType | null>(null)}>
      <IdOpenedPopup.Provider value={useState<string | null>(null)}>
        {children}
      </IdOpenedPopup.Provider>
    </GoalContext.Provider>
  );
}
