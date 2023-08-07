import { ReactNode, useState } from "react";
import { GoalContext } from "./Goal";
import { GoalType } from "../types/goal";
import { IdOpenedPopup } from "./IdOpenedPopup";
import { CurrentPage, CurrentPageContext } from "./CurrentPage";
import { LocalStorageKeys } from "../types/localStorageKeys";
import { getGoals } from "../utils";

export function ContextProviders({ children }: { children: ReactNode }) {
  const idLastOpened = localStorage.getItem(LocalStorageKeys.IdLastOpenedGoal);
  const initPage = idLastOpened ? "goal" : "main";
  const lastOpenedGoal =
    getGoals().find(({ id }) => idLastOpened?.includes(id)) || null;

  return (
    <CurrentPageContext.Provider value={useState<CurrentPage>(initPage)}>
      <GoalContext.Provider value={useState<GoalType | null>(lastOpenedGoal)}>
        <IdOpenedPopup.Provider value={useState<string | null>(null)}>
          {children}
        </IdOpenedPopup.Provider>
      </GoalContext.Provider>
    </CurrentPageContext.Provider>
  );
}
