import {
  REQUEST_POST_SUCCESS,
  REQUEST_POST_FAIL,
  RESET_POST,
  POSTS_DELETE,
  POSTS_VOTE,
  POSTS_COMMENTS,
  COMMENT_CREATE_SUCCESS,
  COMMENTS_DELETE
} from '../actions'

const initialState = {
  loading: true,
  error: '',
  post: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        post: action.payload
      }
    case REQUEST_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        post: {}
      }
    case RESET_POST:
      return initialState
    case POSTS_DELETE:
      const postToDelete = action.payload
      return { ...state, post: { ...postToDelete, deleted: true } }
    case POSTS_VOTE:
      const postToVote = action.payload
      return { ...state, post: { ...state.post, ...postToVote } }
    case POSTS_COMMENTS:
      const comments = action.payload
      const post = { ...state.post, comments }
      return { ...state, post }
    case COMMENT_CREATE_SUCCESS:
      const postWithNewComment = {
        ...state.post,
        comments: [...state.post.comments, action.payload]
      }
      return { ...state, post: postWithNewComment }
    case COMMENTS_DELETE:
      const commentToDelete = action.payload
      const filteredComments = state.post.comments.filter(
        c => c.id !== commentToDelete.id
      )
      const postWithDeletedComment = {
        ...state.post,
        comments: filteredComments
      }
      return { ...state, post: postWithDeletedComment }
    default:
      return state
  }
}

