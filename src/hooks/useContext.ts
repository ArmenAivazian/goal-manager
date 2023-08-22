import { Context, useContextSelector } from "use-context-selector";

export function useContext<T>(context: Context<T>) {
  return useContextSelector(context, (value) => value);
}

export function useGetContext<T extends unknown[]>(context: Context<T>) {
  return useContextSelector(context, (value) => value[0] as T[0]);
}

export function useSetContext<T extends unknown[]>(context: Context<T>) {
  return useContextSelector(context, (value) => value[1] as T[1]);
}
