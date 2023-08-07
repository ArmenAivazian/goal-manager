import { ReactNode, useState } from "react";
import { GoalContext } from "./Goal";
import { GoalType } from "../types/goal";
import { IdOpenedPopup } from "./IdOpenedPopup";
import { CurrentPage, CurrentPageContext } from "./CurrentPage";

export function ContextProviders({ children }: { children: ReactNode }) {
  return (
    <CurrentPageContext.Provider value={useState<CurrentPage>("main")}>
      <GoalContext.Provider value={useState<GoalType | null>(null)}>
        <IdOpenedPopup.Provider value={useState<string | null>(null)}>
          {children}
        </IdOpenedPopup.Provider>
      </GoalContext.Provider>
    </CurrentPageContext.Provider>
  );
}
