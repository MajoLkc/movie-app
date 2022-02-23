import axios from "axios"
import { Dispatch } from "@reduxjs/toolkit"
import { ActionType } from "../action-types"
import { Action } from "../actions"
import configData from "../../config.json"

export const searchMovies = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_MOVIES,
    })
    try {
      const { data } = await axios.get(
        `${configData.url}${configData.apiKey}`,
        {
          params: {
            s: term,
          },
        }
      )
      const names = data.Search.map((result: any) => {
        return result
      })
      dispatch({
        type: ActionType.SEARCH_MOVIES_SUCCESS,
        payload: names,
      })
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_MOVIES_ERROR,
        payload: err.message,
      })
    }
  }
}
