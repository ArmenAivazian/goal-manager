export interface GoalType {
    name: string;
    importance?: number;
    progress?: number;
    children?: GoalType[];
}