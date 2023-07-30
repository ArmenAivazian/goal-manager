export interface Goal {
  name: string;
  importance?: number;
  progress?: number;
  children?: Goal[];
}

export interface GoalsProps {
  data: Goal | Goal[];
}
