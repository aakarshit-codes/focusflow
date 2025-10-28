import { create } from "zustand";

const useTaskStore = create((set, get) => ({
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
  }
}));

export default useTaskStore;