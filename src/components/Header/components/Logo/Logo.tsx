import classes from "./Logo.module.scss";
import { useContext } from "../../../../hooks";
import { CurrentPageContext } from "../../../../contexts/CurrentPage";
import { getImgSrc } from "./utils";

export function Logo() {
  const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

  function handleLogoClick() {
    if (currentPage === "main") setCurrentPage("goal");

    if (currentPage === "goal") setCurrentPage("main");
  }

  return (
    <button onClick={handleLogoClick} className={classes.wrapper}>
      <img src={getImgSrc(currentPage)} className={classes.logo} alt="Logo" />
    </button>
  );
}
