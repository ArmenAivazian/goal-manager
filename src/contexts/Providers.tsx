import { ReactNode, useState } from "react";
import { GoalContext } from "./Goal";
import { GoalType } from "../types/goal";
import { IdOpenedPopup } from "./IdOpenedPopup";
import { CurrentPageContext } from "./CurrentPage";
import { LocalStorageKeys } from "../types/localStorageKeys";
import { getGoals } from "../utils";
import { Routes } from "../types/routes";

export function ContextProviders({ children }: { children: ReactNode }) {
  const idLastOpened = localStorage.getItem(LocalStorageKeys.IdLastOpenedGoal);
  const lastOpenedGoal =
    getGoals().find(({ id }) => idLastOpened?.includes(id)) || null;
  const initPage = idLastOpened && lastOpenedGoal ? Routes.Goal : Routes.Main;

  return (
    <CurrentPageContext.Provider value={useState<Routes>(initPage)}>
      <GoalContext.Provider value={useState<GoalType | null>(lastOpenedGoal)}>
        <IdOpenedPopup.Provider value={useState<string | null>(null)}>
          {children}
        </IdOpenedPopup.Provider>
      </GoalContext.Provider>
    </CurrentPageContext.Provider>
  );
}
