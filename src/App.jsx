import { useState, useEffect } from 'react'
import useTaskStore from "./store/useTaskStore"
import TaskList from './components/TaskList.jsx'

function App() {
  const [title, setTitle] = useState('')
  const addTask = useTaskStore((state) => state.addTasks)
  const tick = useTaskStore((state) => state.tick)
  const fetchTasks = useTaskStore((state) => state.fetchTasks)

  const handleAdd = () => {
    if (title.trim()) {
      addTask(title)
      setTitle('')
    }
  }

  useEffect(() => {
    const hasTasks = useTaskStore.getState().tasks.length > 0
    if (!hasTasks) {
      fetchTasks()
    }

    const interval = setInterval(() => tick(), 1000)
    return () => clearInterval(interval)
  }, [tick, fetchTasks])

  return (
    <div className="p-8 max-w-lg mx-auto space-y-4">
      <h1>FocusFlow™</h1>

      <div className="flex gap-2">
        <input
          placeholder="New task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <TaskList />
    </div>
  )
}

export default App
