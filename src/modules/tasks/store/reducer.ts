import { TasksState, Task, TasksAction } from './types'
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from './actions'
import { v4 } from 'uuid'

export const initialTasksState: TasksState = {
  tasks: []
}

export function tasksReducer(state: TasksState, action: TasksAction) {
  switch (action.type) {
    case ADD_TASK: {
      const task = {
        id: v4(),
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
        tasks: state.tasks.filter((task: Task) => task.id !== action.taskId)
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


