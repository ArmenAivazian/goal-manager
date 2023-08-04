export interface GoalType {
  id: string;
  name: string;
  importance?: number;
  progress?: number;
  children?: GoalType[];
}
