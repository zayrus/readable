import {
  REQUEST_COMMENTS_SUCCESS,
  REQUEST_COMMENTS_FAIL,
  RESET_COMMENTS,
  COMMENT_CREATE_SUCCESS,
  COMMENT_EDIT_SUCCESS,
  COMMENTS_DELETE,
  COMMENTS_VOTE
} from '../actions'

const initialState = {
  loading: true,
  error: '',
  comments: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        comments: action.payload
      }
    case REQUEST_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        comments: []
      }
    case RESET_COMMENTS:
      return initialState
    case COMMENT_CREATE_SUCCESS:
      return { ...state, comments: [...state.comments, action.payload] }
    case COMMENT_EDIT_SUCCESS:
      const commentToEdit = action.payload
      const filteredCommentsEdit = state.comments.filter(
        c => c.id !== commentToEdit.id
      )
      return { ...state, comments: [...filteredCommentsEdit, commentToEdit] }
    case COMMENTS_DELETE:
      const commentToDelete = action.payload
      const filteredCommentsDelete = state.comments.filter(
        c => c.id !== commentToDelete.id
      )
      const deletedComment = { ...commentToDelete, deleted: true }
      return {
        ...state,
        comments: [...filteredCommentsDelete, deletedComment]
      }
    case COMMENTS_VOTE:
      const commentToVote = action.payload
      const filteredCommentsVote = state.comments.filter(
        c => c.id !== commentToVote.id
      )
      return { ...state, comments: [...filteredCommentsVote, commentToVote] }
    default:
      return state
  }
}

