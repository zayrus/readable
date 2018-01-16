import { getPost, putEditPost } from '../api'

export const POST_EDIT_REQUEST_SUCCESS = 'POST_EDIT_REQUEST_SUCCESS'
export const POST_EDIT_REQUEST_FAIL = 'POST_EDIT_REQUEST_FAIL'
export const POST_EDIT_RESET = 'POST_EDIT_RESET'
export const POST_EDIT_SET_TEXT = 'POST_EDIT_SET_TEXT'
export const POST_EDIT_SUBMITTING = 'POST_EDIT_SUBMITTING'
export const POST_EDIT_SUCCESS = 'POST_EDIT_SUCCESS'
export const POST_EDIT_FAIL = 'POST_EDIT_FAIL'

export const requestPostToEdit = id => async dispatch => {
  try {
    const res = await getPost(id)
    const post = await res.json()
    dispatch({ type: POST_EDIT_REQUEST_SUCCESS, payload: post })
  } catch (error) {
    dispatch({ type: POST_EDIT_REQUEST_FAIL, payload: error.message })
  }
}

export const resetPostToEdit = () => ({ type: POST_EDIT_RESET })

export const setTextForPostEdit = (name, value) => ({
  type: POST_EDIT_SET_TEXT,
  payload: { name, value }
})

export const postEdit = (values, postId) => async dispatch => {
  dispatch({ type: POST_EDIT_SUBMITTING })
  try {
    const res = await putEditPost(values, postId)
    const post = await res.json()
    dispatch({ type: POST_EDIT_SUCCESS, payload: post })
  } catch (error) {
    dispatch({ type: POST_EDIT_FAIL, payload: error.message })
  }
}

