export interface Goal {
  name: string;
  importance?: number;
  progress?: number;
  children?: Goal[];
}

export interface GoalsProps {
  goals: Goal | Goal[];
  setGoals: (value: Goal) => void;
  setFocusMode: (value: boolean) => void;
}
