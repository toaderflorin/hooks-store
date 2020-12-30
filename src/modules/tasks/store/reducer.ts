import Tasks from '../components/Tasks'
import { TasksState, Task } from './types'

const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TOGGLE_TASK = 'TOGGLE_TASK'

export const initialTasksState: TasksState = {
  tasks: []
}

export type TasksAction =
  | { type: typeof ADD_TASK, description: string }
  | { type: typeof REMOVE_TASK, taskId: string }
  | { type: typeof TOGGLE_TASK, taskId: string }

export function dashboardReducer(state: TasksState, action: TasksAction) {
  switch (action.type) {
    case ADD_TASK: {
      const task = {
        id: '',
        description: action.description,
        ticked: false
      }

      return {
        ...state,
        tasks: [...state.tasks, task]
      }
    }
    
    case REMOVE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((task:Task) => task.id !== action.taskId)
      }
    }

    case TOGGLE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task: Task) => {
          if (task.id === action.taskId) {
            return { 
              ...task,
              ticked: !task.ticked 
            }
          } else {
            return task
          }
        })
      }
    }

    default: {
      return state
    }
  }
}


