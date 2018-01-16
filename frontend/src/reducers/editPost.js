import {
  POST_EDIT_REQUEST_SUCCESS,
  POST_EDIT_REQUEST_FAIL,
  POST_EDIT_RESET,
  POST_EDIT_SUBMITTING,
  POST_EDIT_SUCCESS,
  POST_EDIT_FAIL,
  POST_EDIT_SET_TEXT
} from '../actions'

const initialState = {
  loading: true,
  errorFetch: '',
  post: {},
  submitting: false,
  errorSubmit: '',
  title: '',
  body: '',
  postEdited: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_EDIT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        post: action.payload
      }
    case POST_EDIT_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        errorFetch: action.payload,
        post: {}
      }
    case POST_EDIT_RESET:
      return initialState
    case POST_EDIT_SUBMITTING:
      return { ...state, submitting: true }
    case POST_EDIT_SUCCESS:
      return { ...state, postEdited: action.payload }
    case POST_EDIT_FAIL:
      return { ...state, submitting: false, errorSubmit: action.payload }
    case POST_EDIT_SET_TEXT:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}
