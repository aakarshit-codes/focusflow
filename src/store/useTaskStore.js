import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTaskStore = create(
  devtools(
    persist(
      (set, get) => ({
        tasks: [],

        /* addTasks  */
        /* Immutability: returns new array of tasks and not directly modifying old array */
        addTasks: (title) =>
          set((state) => ({
            /* spread operator (...) make a copy of the existing array */
            tasks: [
              ...state.tasks,
              { id: Date.now(), title, time: 0, isRunning: false }
            ],
          })),

        removeTask: (id) =>
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
          })),

        toggleTask: (id) => {
          const { tasks } = get();
          const updated = tasks.map((task) =>
            task.id === id ? { ...task, isRunning: !task.isRunning } : task
          );
          set({ tasks: updated });
        },

        tick: () => {
          const { tasks } = get()
          const updated = tasks.map((task) =>
            task.isRunning ? { ...task, time: task.time + 1 } : task
          )
          set({ tasks: updated })
        },

        fetchTasks: async () => {
          try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            const data = await res.json()
            const formatted = data.map((t) => ({
              id: t.id,
              title: t.title,
              time: 0,
              isRunning: false,
            }))
            set({ tasks: formatted })
          } catch (error) {
            console.error('Failed to fetch tasks', error)
          }
        },
      }),
      {
        name: 'focusflow-storage', // key name in localStorage
      }
    )
  )
);

export default useTaskStore;