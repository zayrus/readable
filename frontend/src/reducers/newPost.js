import {
    POST_CREATE_SUBMITTING,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    POST_CREATE_RESET,
    POST_CREATE_SET_TEXT,
    POST_CREATE_SET_CATEGORY
  } from '../actions'

const initialState = {
  submitting: false,
  error: '',
  author: '',
  title: '',
  body: '',
  category: 'none',
  postNew: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_CREATE_SUBMITTING:
      return { ...state, submitting: true }
    case POST_CREATE_SUCCESS:
      return { ...state, postNew: action.payload, submitting: false }
    case POST_CREATE_FAIL:
      return { ...state, submitting: false, error: action.payload }
    case POST_CREATE_RESET:
      return initialState
    case POST_CREATE_SET_TEXT:
      return { ...state, [action.payload.name]: action.payload.value }
    case POST_CREATE_SET_CATEGORY:
      return { ...state, category: action.payload }
    default:
      return state
  }
}
