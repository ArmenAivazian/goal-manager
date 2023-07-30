import favicon from "/favicon.svg";
import classes from "./Logo.module.scss";

export function Logo() {
  return (
    <div className={classes.wrapper}>
      <a href="#">
        <img src={favicon} className={classes.logo} alt="Logo" />
      </a>
    </div>
  );
}
