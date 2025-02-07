import { FormEvent } from "react";
import { GoalContext } from "../../../contexts/Goal";
import { useSetContext } from "../../../hooks/useContext";
import { getGoals, getUniqueKey, setGoalsToLS } from "../../../utils";
import { CurrentPageContext } from "../../../contexts/CurrentPage";
import { LocalStorageKeys } from "../../../types/localStorageKeys";
import { Routes } from "../../../types/routes";

export function useCreateGoal(
  inputValue: string,
  setInputValue: (value: string) => void
) {
  const name = inputValue || "Unnamed Goal";
  const setGoal = useSetContext(GoalContext);
  const setCurrentPage = useSetContext(CurrentPageContext);
  const newGoal = { id: getUniqueKey(), name };

  return (e: FormEvent) => {
    e.preventDefault();
    setGoalsToLS([...getGoals(), newGoal]);
    setGoal(newGoal);
    setCurrentPage(Routes.Goal);
    setInputValue("");
    localStorage.setItem(
      LocalStorageKeys.IdLastOpenedGoal,
      JSON.stringify(newGoal.id)
    );
  };
}
