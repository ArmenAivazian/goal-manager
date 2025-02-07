import classes from "./Logo.module.scss";
import { useContext } from "../../../../hooks";
import { CurrentPageContext } from "../../../../contexts/CurrentPage";
import { Routes } from "../../../../types/routes";

export function Logo() {
  const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

  function handleLogoClick() {
    if (currentPage !== Routes.Main) setCurrentPage(Routes.Main);
    else setCurrentPage(Routes.Goal);
  }

  return (
    <button onClick={handleLogoClick} className={classes.wrapper}>
      {currentPage === Routes.Main ? "Goal." : "List."}
    </button>
  );
}
