import { putEditComment } from '../api'

export const COMMENT_EDIT_ID = 'COMMENT_EDIT_ID'
export const COMMENT_EDIT_RESET = 'COMMENT_EDIT_RESET'
export const COMMENT_EDIT_SET_TEXT = 'COMMENT_EDIT_SET_TEXT'
export const COMMENT_EDIT_SUBMITTING = 'COMMENT_EDIT_SUBMITTING'
export const COMMENT_EDIT_SUCCESS = 'COMMENT_EDIT_SUCCESS'
export const COMMENT_EDIT_FAIL = 'COMMENT_EDIT_FAIl'

export const setCommentToEdit = commentId => ({
  type: COMMENT_EDIT_ID,
  payload: commentId
})

export const resetCommentToEdit = () => ({ type: COMMENT_EDIT_RESET })

export const setTextForCommentEdit = (name, value) => ({
  type: COMMENT_EDIT_SET_TEXT,
  payload: { name, value }
})

export const commentEdit = (values, commentId) => async dispatch => {
  dispatch({ type: COMMENT_EDIT_SUBMITTING })
  try {
    const res = await putEditComment(values, commentId)
    const comment = await res.json()
    dispatch({ type: COMMENT_EDIT_SUCCESS, payload: comment })
  } catch (error) {
    dispatch({ type: COMMENT_EDIT_FAIL, payload: error.message })
  }
}

