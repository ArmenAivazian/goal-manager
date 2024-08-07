import classes from "./Goal.module.scss";
import { GoalProps } from "./Goal.types";
import { Item } from "./components/Item";
import { getValueForChildInitImportance } from "./utils";

export function Goal({ goal, notOneChild, setSelectedGoal }: GoalProps) {
  if (!goal) return <></>;

  if (!Array.isArray(goal)) {
    const childInitImportance = getValueForChildInitImportance(
      goal?.children?.length
    );

    return (
      <>
        <Item {...goal} {...(childInitImportance && { childInitImportance })} />

        <Goal
          goal={goal.children}
          notOneChild={goal.children?.length !== 1}
          setSelectedGoal={setSelectedGoal}
        />
      </>
    );
  }

  const gap = 2;
  const gapCoefficient = ((goal.length - 1) * gap) / goal.length;

  return (
    <div className={classes.line} style={{ gap }}>
      {goal.map((item) => {
        const { id, children, importance, ...params } = item;
        const hasChildren = !!children?.length;
        const childInitImportance = getValueForChildInitImportance(
          children?.length
        );

        return (
          <div
            key={id}
            style={{ width: `calc(${importance}% - ${gapCoefficient}px)` }}
          >
            <Item
              id={id}
              canChangeProgress={!hasChildren}
              importance={importance}
              canChangeImportance={notOneChild}
              {...(childInitImportance && { childInitImportance })}
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
