import type { ItemProps } from "./Item.types";
import classes from "./Item.module.scss";
import { EditPopup } from "./components/EditPopup";
import { IdOpenedPopup } from "../../../../../../contexts/IdOpenedPopup";
import { useContext } from "../../../../../../hooks/useContext";

export function Item({
  id,
  name,
  progress,
  canChangeProgress,
  addSubGoalWithImportance,
  onDbClick,
}: ItemProps) {
  const [idOpenedPopup, setIsPopupOpened] = useContext(IdOpenedPopup);

  return (
    <>
      <div
        className={classes.wrapper}
        onDoubleClick={onDbClick}
        onClick={() => setIsPopupOpened(id)}
      >
        {name}
        <span
          className={classes.progress}
          {...(progress && { style: { width: `${progress * 100}%` } })}
        />
      </div>

      {idOpenedPopup === id && (
        <EditPopup
          id={id}
          name={name}
          progress={progress}
          canChangeProgress={canChangeProgress}
          addSubGoalWithImportance={addSubGoalWithImportance}
          onClose={() => setIsPopupOpened(null)}
        />
      )}
    </>
  );
}
