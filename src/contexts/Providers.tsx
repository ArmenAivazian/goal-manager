import { ReactNode, useState } from "react";
import { GoalContext } from "./Goal";
import { GoalType } from "../types/goal";
import { IdOpenedPopup } from "./IdOpenedPopup";
import { CurrentPage, CurrentPageContext } from "./CurrentPage";
import { LocalStorageKeys } from "../types/localStorageKeys";

export function ContextProviders({ children }: { children: ReactNode }) {
  const lastOpenedGoal = localStorage.getItem(LocalStorageKeys.LastOpenedGoal);
  const initPage = lastOpenedGoal ? "goal" : "main";
  const goal = lastOpenedGoal && JSON.parse(lastOpenedGoal);

  return (
    <CurrentPageContext.Provider value={useState<CurrentPage>(initPage)}>
      <GoalContext.Provider value={useState<GoalType | null>(goal)}>
        <IdOpenedPopup.Provider value={useState<string | null>(null)}>
          {children}
        </IdOpenedPopup.Provider>
      </GoalContext.Provider>
    </CurrentPageContext.Provider>
  );
}
