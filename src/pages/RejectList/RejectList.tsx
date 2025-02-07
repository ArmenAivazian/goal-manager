import { GoalType } from "../../types/goal";
import { LocalStorageKeys } from "../../types/localStorageKeys";
import classes from "./RejectList.module.scss";

export function RejectList() {
  const rejects: GoalType[] = JSON.parse(
    localStorage.getItem(LocalStorageKeys.Rejects) || "[]"
  );

  return (
    <ul className={classes.wrapper}>
      {rejects.map(({ name }) => (
        <li className={classes.item}>{name}</li>
      ))}
    </ul>
  );
}
