import { useContextSelector } from "use-context-selector";
import classes from "./Goal.module.scss";
import { GoalProps } from "./Goal.types";
import { Item } from "./components/Item";
import { GoalContext } from "../../contexts/Goal";

export function Goal({ goal, selectedGoal, setSelectedGoal }: GoalProps) {
  const initGoal = useContextSelector(GoalContext, (goal) => goal[0]);

  const currentGoal = selectedGoal || goal || initGoal;

  if (!currentGoal) return <></>;

  if (!Array.isArray(currentGoal)) {
    if (!currentGoal.children) {
      return <Item {...currentGoal} canChangeProgress />;
    }

    return (
      <>
        <Item {...currentGoal} addSubGoalWithImportance />

        <Goal goal={currentGoal.children} setSelectedGoal={setSelectedGoal} />
      </>
    );
  }

  return (
    <div className={classes.line}>
      {currentGoal.map((item) => {
        const { id, name, children, progress, importance } = item;
        const hasChildren = !!children?.length;

        return (
          <div
            key={id}
            style={{ width: importance ? `${importance * 100}%` : "100%" }}
          >
            <Item
              id={id}
              name={name}
              progress={progress}
              canChangeProgress={!hasChildren}
              addSubGoalWithImportance={hasChildren}
              {...(hasChildren && { onDbClick: () => setSelectedGoal(item) })}
            />

            {!!hasChildren && (
              <Goal goal={children} setSelectedGoal={setSelectedGoal} />
            )}
          </div>
        );
      })}
    </div>
  );
}
