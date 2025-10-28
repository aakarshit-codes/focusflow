import useTaskStore from "../store/useTaskStore";

function TaskList() {
  const tasks = useTaskStore((state) => state.tasks)
  const toggleTask = useTaskStore((state) => state.toggleTask)
  const removeTask = useTaskStore((state) => state.removeTask)

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
        >
          <div>
            <h3 className="font-medium">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.time}s</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => toggleTask(task.id)} 
              className={`px-3 py-1 rounded text-white ${task.isRunning ? 'bg-red-500' : 'bg-green-500'
                }`}
            >
              {task.isRunning ? 'Stop' : 'Start'}
            </button>
            <button
              onClick={() => removeTask(task.id)}
              >
                Remove
              </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList;