import { CurrentPageContext } from "../../../../contexts/CurrentPage";
import { useSetContext } from "../../../../hooks/useContext";
import { Routes } from "../../../../types/routes";
import classes from "./RejectButton.module.scss";

export function RejectButton() {
  const setCurrentPage = useSetContext(CurrentPageContext);

  return (
    <button
      onClick={() => setCurrentPage(Routes.Reject)}
      className={`${classes.button} danger`}
    >
      Reject List
    </button>
  );
}
