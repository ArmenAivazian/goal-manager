import { CurrentPageContext } from "../../../../contexts/CurrentPage";
import { useSetContext } from "../../../../hooks/useContext";
import classes from "./RejectButton.module.scss";

export function RejectButton() {
  const setCurrentPage = useSetContext(CurrentPageContext);

  return (
    <button
      onClick={() => setCurrentPage("reject")}
      className={`${classes.button} danger`}
    >
      Reject List
    </button>
  );
}
