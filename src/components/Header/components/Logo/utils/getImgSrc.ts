import { CurrentPage } from "../../../../../contexts/CurrentPage";
import homeIcon from "../../../../../assets/icons/home.svg";
import targetIcon from "/favicon.svg";

export function getImgSrc(currentPage: CurrentPage) {
  switch (currentPage) {
    case "goal":
      return homeIcon;
    default:
      return targetIcon;
  }
}
