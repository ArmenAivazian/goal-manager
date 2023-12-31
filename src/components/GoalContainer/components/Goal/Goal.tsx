import classes from "./Goal.module.scss";
import { GoalProps } from "./Goal.types";
import { Item } from "./components/Item";

export function Goal({ goal, notOneChild, setSelectedGoal }: GoalProps) {
  if (!goal) return <></>;

  if (!Array.isArray(goal)) {
    return (
      <>
        <Item {...goal} addSubGoalWithImportance />

        <Goal
          goal={goal.children}
          notOneChild={goal.children?.length !== 1}
          setSelectedGoal={setSelectedGoal}
        />
      </>
    );
  }

  return (
    <div className={classes.line}>
      {goal.map((item) => {
        const { id, children, importance, ...params } = item;
        const hasChildren = !!children?.length;

        return (
          <div key={id} style={{ width: `${importance}%` }}>
            <Item
              id={id}
              canChangeProgress={!hasChildren}
              addSubGoalWithImportance={hasChildren}
              importance={importance}
              canChangeImportance={notOneChild}
              {...(hasChildren && { onDbClick: () => setSelectedGoal(item) })}
              {...params}
            />

            {hasChildren && (
              <Goal
                goal={children}
                notOneChild={children?.length !== 1}
                setSelectedGoal={setSelectedGoal}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
