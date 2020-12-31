import { Dispatch } from 'react'
import { TasksAction } from './types'
import { AppState } from '../../types'

export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'

export function addTask(description: string) {
  return async function (state: AppState, dispatch: Dispatch<TasksAction>) {
    dispatch({
      type: ADD_TASK,
      description
    })
  }
}

export function removeTask(taskId: string) {
  return async function (state: AppState, dispatch: Dispatch<TasksAction>) {
    dispatch({
      type: REMOVE_TASK,
      taskId
    })
  }
}

export function toggleSize(taskId: string) {
  return async function (state: AppState, dispatch: Dispatch<TasksAction>) {
    dispatch({
      type: TOGGLE_TASK,
      taskId
    })
  }
}
