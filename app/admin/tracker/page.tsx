"use client"

import { useMemo, useState } from "react"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

import { initialTasks, type Task, type TaskStatus } from "./task-data"

const statusOptions: Array<{ value: TaskStatus; label: string }> = [
  { value: "todo", label: "Todo" },
  { value: "in_progress", label: "In progress" },
  { value: "done", label: "Done" },
]

const createId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`

type DraftTask = {
  title: string
  notes: string
  dueDate: string
  status: TaskStatus
}

export default function AdminTrackerPage() {
  const [tasks, setTasks] = useState<Task[]>(() => initialTasks)
  const [draft, setDraft] = useState<DraftTask>({
    title: "",
    notes: "",
    dueDate: "",
    status: "todo",
  })

  const groupedTasks = useMemo(() => {
    const grouped: Record<TaskStatus, Task[]> = {
      todo: [],
      in_progress: [],
      done: [],
    }

    tasks.forEach((task) => {
      grouped[task.status].push(task)
    })

    return grouped
  }, [tasks])

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const title = draft.title.trim()

    if (!title) {
      return
    }

    setTasks((prev) => [
      {
        id: createId(),
        title,
        notes: draft.notes.trim(),
        status: draft.status,
        dueDate: draft.dueDate || undefined,
      },
      ...prev,
    ])

    setDraft({ title: "", notes: "", dueDate: "", status: "todo" })
  }

  const updateTask = (taskId: string, patch: Partial<Task>) => {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, ...patch } : task)))
  }

  const removeTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId))
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Badge>Project Tracker</Badge>
        <h1 className="text-3xl font-semibold">District Tap project tracker</h1>
        <p className="text-sm text-black/60">
          Keep lightweight admin tasks organized. Updates are stored locally for now and will reset on refresh.
        </p>
      </div>

      <Card>
        <form className="space-y-4" onSubmit={handleAddTask}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold">Add a task</h2>
              <p className="text-sm text-black/60">Capture updates you want to track here.</p>
            </div>
            <Button type="submit" size="sm">
              Add task
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
            <label className="space-y-2 text-sm font-semibold text-black/70">
              Title
              <input
                className="w-full rounded-2xl border border-black/10 px-4 py-2 text-sm font-normal text-black outline-none focus:border-black"
                placeholder="New task"
                value={draft.title}
                onChange={(event) => setDraft((prev) => ({ ...prev, title: event.target.value }))}
              />
            </label>
            <label className="space-y-2 text-sm font-semibold text-black/70">
              Status
              <select
                className="w-full rounded-2xl border border-black/10 px-4 py-2 text-sm font-normal text-black outline-none focus:border-black"
                value={draft.status}
                onChange={(event) => setDraft((prev) => ({ ...prev, status: event.target.value as TaskStatus }))}
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm font-semibold text-black/70">
              Due date
              <input
                className="w-full rounded-2xl border border-black/10 px-4 py-2 text-sm font-normal text-black outline-none focus:border-black"
                type="date"
                value={draft.dueDate}
                onChange={(event) => setDraft((prev) => ({ ...prev, dueDate: event.target.value }))}
              />
            </label>
          </div>
          <label className="space-y-2 text-sm font-semibold text-black/70">
            Notes
            <textarea
              className="min-h-[120px] w-full rounded-2xl border border-black/10 px-4 py-3 text-sm font-normal text-black outline-none focus:border-black"
              placeholder="Optional context or links."
              value={draft.notes}
              onChange={(event) => setDraft((prev) => ({ ...prev, notes: event.target.value }))}
            />
          </label>
        </form>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        {statusOptions.map((option) => {
          const tasksForStatus = groupedTasks[option.value]
          return (
            <Card key={option.value} className="border-black/5">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold">{option.label}</h2>
                  <p className="text-xs text-black/50">{tasksForStatus.length} tasks</p>
                </div>
                <Badge>{option.label}</Badge>
              </div>
              <div className="mt-6 space-y-4 text-sm">
                {tasksForStatus.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-black/10 px-4 py-6 text-center text-black/40">
                    Nothing here yet.
                  </div>
                ) : (
                  tasksForStatus.map((task) => (
                    <div key={task.id} className="space-y-3 rounded-2xl border border-black/10 p-4">
                      <input
                        className="w-full text-base font-semibold text-black outline-none"
                        value={task.title}
                        onChange={(event) => updateTask(task.id, { title: event.target.value })}
                      />
                      <textarea
                        className="min-h-[80px] w-full text-sm text-black/60 outline-none"
                        placeholder="Add notes..."
                        value={task.notes}
                        onChange={(event) => updateTask(task.id, { notes: event.target.value })}
                      />
                      <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
                        <label className="space-y-1 text-xs font-semibold text-black/60">
                          Status
                          <select
                            className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm text-black outline-none focus:border-black"
                            value={task.status}
                            onChange={(event) => updateTask(task.id, { status: event.target.value as TaskStatus })}
                          >
                            {statusOptions.map((statusOption) => (
                              <option key={statusOption.value} value={statusOption.value}>
                                {statusOption.label}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="space-y-1 text-xs font-semibold text-black/60">
                          Due date
                          <input
                            className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm text-black outline-none focus:border-black"
                            type="date"
                            value={task.dueDate ?? ""}
                            onChange={(event) =>
                              updateTask(task.id, { dueDate: event.target.value || undefined })
                            }
                          />
                        </label>
                      </div>
                      <div className="flex items-center justify-end">
                        <Button variant="outline" size="sm" onClick={() => removeTask(task.id)}>
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
