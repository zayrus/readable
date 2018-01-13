import {
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAIL,
  RESET_POSTS,
  POSTS_SET_ORDER,
  POSTS_DELETE,
  POSTS_VOTE,
  POSTS_COMMENTS
} from '../actions'

const initialState = {
  loading: true,
  error: '',
  posts: [],
  order: 'timestamp'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        posts: action.payload
      }
    case REQUEST_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: []
      }
    case RESET_POSTS:
      return initialState
    case POSTS_SET_ORDER:
      return { ...state, order: action.payload }
    case POSTS_DELETE:
      const postToDelete = action.payload
      const filteredPosts = state.posts.filter(p => p.id !== postToDelete.id)
      const deletedPost = { ...postToDelete, deleted: true }
      return { ...state, posts: [...filteredPosts, deletedPost] }
    case POSTS_VOTE:
      const postToVote = action.payload
      const filteredPostsVote = state.posts.filter(p => p.id !== postToVote.id)
      const oldPost = state.posts.filter(p => p.id === postToVote.id)
      return {
        ...state,
        posts: [...filteredPostsVote, { ...oldPost[0], ...postToVote }]
      }
    case POSTS_COMMENTS:
      const comments = action.payload
      if (comments.length) {
        const postArray = state.posts.filter(
          p => p.id === comments[0].parentId
        )
        const post = postArray[0]
        if (post) {
          const addPost = { ...post, comments }
          const filteredPostsComments = state.posts.filter(
            p => p.id !== post.id
          )
          return { ...state, posts: [...filteredPostsComments, addPost] }
        } else {
          return state
        }
      } else {
        return state
      }
    default:
      return state
  }
}
