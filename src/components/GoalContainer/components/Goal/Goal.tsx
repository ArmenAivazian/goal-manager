import classes from "./Goal.module.scss";
import { GoalProps } from "./Goal.types";
import { Item } from "./components/Item";

export function Goal({ goal, setSelectedGoal }: GoalProps) {
  if (!goal) return goal;

  if (!Array.isArray(goal)) {
    return (
      <>
        <Item {...goal} addSubGoalWithImportance />

        <Goal goal={goal.children} setSelectedGoal={setSelectedGoal} />
      </>
    );
  }

  return (
    <div className={classes.line}>
      {goal.map((item) => {
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
