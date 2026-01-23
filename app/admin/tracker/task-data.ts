export type TaskStatus = "todo" | "in_progress" | "done"

export type Task = {
  id: string
  title: string
  notes: string
  status: TaskStatus
  dueDate?: string
}

export const initialTasks: Task[] = [
  {
    id: "task-brief",
    title: "Finalize menu refresh checklist",
    notes: "Confirm downtown + northside sections and pricing.",
    status: "todo",
    dueDate: "2026-01-30",
  },
  {
    id: "task-events",
    title: "Publish Q1 private events timeline",
    notes: "Coordinate with space availability and event form copy.",
    status: "in_progress",
    dueDate: "2026-02-05",
  },
  {
    id: "task-catering",
    title: "Review catering inquiry responses",
    notes: "Reply to pending requests from the last two weeks.",
    status: "done",
    dueDate: "2026-01-18",
  },
]
