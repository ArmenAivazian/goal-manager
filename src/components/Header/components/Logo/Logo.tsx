import classes from "./Logo.module.scss";
import { useContext } from "../../../../hooks";
import { CurrentPageContext } from "../../../../contexts/CurrentPage";

export function Logo() {
  const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

  function handleLogoClick() {
    if (currentPage === "main") setCurrentPage("goal");

    if (currentPage === "goal") setCurrentPage("main");
  }

  return (
    <button onClick={handleLogoClick} className={classes.wrapper}>
      {currentPage === "main" ? "Goal." : "List."}
    </button>
  );
}
