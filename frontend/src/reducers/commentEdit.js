import {
  COMMENT_EDIT_ID,
  COMMENT_EDIT_SUBMITTING,
  COMMENT_EDIT_SUCCESS,
  COMMENT_EDIT_FAIL,
  COMMENT_EDIT_RESET,
  COMMENT_EDIT_SET_TEXT,
} from '../actions'

const initialState = {
  editingCommentId: '',
  submitting: false,
  error: '',
  body: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_EDIT_ID:
      return { ...state, editingCommentId: action.payload }
    case COMMENT_EDIT_SUBMITTING:
      return { ...state, submitting: true }
    case COMMENT_EDIT_SUCCESS:
      return initialState
    case COMMENT_EDIT_FAIL:
      return { ...state, error: action.payload }
    case COMMENT_EDIT_RESET:
      return initialState
    case COMMENT_EDIT_SET_TEXT:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}

