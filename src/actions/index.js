import { randomIntegerInRange } from '../utils'
import {
  LAUNCH_DATA_FETCH_REQUESTED,
  LAUNCH_DATA_FETCH_SUCCEEDED,
  LAUNCH_DATA_FETCH_FAILED,
  SELECT_NEXT_LAUNCH,
  SELECT_PREV_LAUNCH
} from '../constants/action-types'

export const launchDataFetchRequested = () => ({
  type: LAUNCH_DATA_FETCH_REQUESTED
})

export const launchDataFetchFailed = () => ({
  type: LAUNCH_DATA_FETCH_FAILED
})

export const launchDataFetchSucceeded = payload => ({
  type: LAUNCH_DATA_FETCH_SUCCEEDED,
  payload
})

export const selectNextLaunch = () => ({
  type: SELECT_NEXT_LAUNCH
})

export const selectPrevLaunch = () => ({
  type: SELECT_PREV_LAUNCH
})
