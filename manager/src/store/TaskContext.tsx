import React, { createContext } from 'react'
import { Task } from '../Pages/Manager/components/Tasks/components/Task/Task.types'


interface selectedTaskProps {
    selectedTask: Task | null,
    setSelectedTask: (task : Task | null) => void
}
 const TaskContext = createContext<selectedTaskProps>({selectedTask: null, setSelectedTask : () => {} });
 export default TaskContext

// export default TaskContext