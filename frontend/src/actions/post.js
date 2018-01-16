import { getPost } from '../api'

export const REQUEST_POST_SUCCESS = 'REQUEST_POST_SUCCESS'
export const REQUEST_POST_FAIL = 'REQUEST_POST_FAIL'
export const RESET_POST = 'RESET_POST'

export const requestPost = id => async dispatch => {
  try {
    const res = await getPost(id)
    const post = await res.json()
    dispatch({ type: REQUEST_POST_SUCCESS, payload: post })
  } catch (error) {
    dispatch({ type: REQUEST_POST_FAIL, payload: error.message })
  }
}

export const resetPost = () => ({ type: RESET_POST })


