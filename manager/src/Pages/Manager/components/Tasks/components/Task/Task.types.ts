export interface Task {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  dueDate: Date;
  duration: number;
  status: string;
}
