import { postNewComment } from '../api'

export const COMMENT_CREATE_SET_TEXT = 'COMMENT_CREATE_SET_TEXT'
export const COMMENT_CREATE_RESET = 'COMMENT_CREATE_RESET'
export const COMMENT_CREATE_SUBMITTING = 'COMMENT_CREATE_SUBMITTING'
export const COMMENT_CREATE_SUCCESS = 'COMMENT_CREATE_SUCCESS'
export const COMMENT_CREATE_FAIL = 'COMMENT_CREATE_FAIL'

export const setTextForCommentCreate = (name, value) => ({
  type: COMMENT_CREATE_SET_TEXT,
  payload: { name, value }
})

export const resetCommentCreate = () => ({
  type: COMMENT_CREATE_RESET
})

export const commentCreate = values => async dispatch => {
  dispatch({ type: COMMENT_CREATE_SUBMITTING })
  try {
    const res = await postNewComment(values)
    const comment = await res.json()
    dispatch({ type: COMMENT_CREATE_SUCCESS, payload: comment })
  } catch (error) {
    dispatch({ type: COMMENT_CREATE_FAIL, payload: error.message })
  }
}

