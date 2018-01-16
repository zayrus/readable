import {
  COMMENT_CREATE_SUBMITTING,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_RESET,
  COMMENT_CREATE_SET_TEXT,
} from '../actions'

const initialState = {
  submitting: false,
  error: '',
  body: '',
  author: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE_SUBMITTING:
      return { ...state, submitting: true }
    case COMMENT_CREATE_SUCCESS:
      return initialState
    case COMMENT_CREATE_FAIL:
      return { ...state, submitting: false, error: action.payload }
    case COMMENT_CREATE_RESET:
      return initialState
    case COMMENT_CREATE_SET_TEXT:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}
