export interface GoalType {
  id: string;
  name: string;
  importance?: number;
  progress?: number;
  notes?: string;
  children?: GoalType[];
}
