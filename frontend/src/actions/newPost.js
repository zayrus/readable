import { postNewPost } from '../api'

export const POST_CREATE_SET_TEXT = 'POST_CREATE_SET_TEXT'
export const POST_CREATE_SET_CATEGORY = 'POST_CREATE_SET_CATEGORY'
export const POST_CREATE_RESET = 'POST_CREATE_RESET'
export const POST_CREATE_SUBMITTING = 'POST_CREATE_SUBMITTING'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_CREATE_FAIL = 'POST_CREATE_FAIL'

export const setTextForPostCreate = (name, value) => ({
  type: POST_CREATE_SET_TEXT,
  payload: { name, value }
})

export const setCategoryForPostCreate = category => ({
  type: POST_CREATE_SET_CATEGORY,
  payload: category
})

export const resetPostCreate = () => ({ type: POST_CREATE_RESET })

export const postCreate = values => async dispatch => {
  dispatch({ type: POST_CREATE_SUBMITTING })
  try {
    const res = await postNewPost(values)
    const post = await res.json()
    dispatch({ type: POST_CREATE_SUCCESS, payload: post })
  } catch (error) {
    dispatch({ type: POST_CREATE_FAIL, payload: error.message })
  }
}