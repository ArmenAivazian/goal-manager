import homeIcon from "../../../../assets/icons/home.svg";
import targetIcon from "/favicon.svg";
import classes from "./Logo.module.scss";
import { LogoProps } from "./Logo.types";

export function Logo({ isListGoalsPage, setIsListGoalsPage }: LogoProps) {
  return (
    <button onClick={setIsListGoalsPage} className={classes.wrapper}>
      <img
        src={isListGoalsPage ? targetIcon : homeIcon}
        className={classes.logo}
        alt="Logo"
      />
    </button>
  );
}
