import {
  getPosts,
  getPostsForCategory,
  deletePost,
  postPostsVote,
  getPostsComments
} from '../api'

export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS'
export const REQUEST_POSTS_FAIL = 'REQUEST_POSTS_FAIL'
export const POSTS_SET_ORDER = 'POSTS_SET_ORDER'
export const POSTS_DELETE = 'POSTS_DELETE'
export const POSTS_VOTE = 'POSTS_VOTE'
export const POSTS_COMMENTS = 'POSTS_COMMENTS'
export const RESET_POSTS = 'RESET_POSTS'

export const requestPosts = () => async dispatch => {
  try {
    const response = await getPosts()
    const posts = await response.json()
    dispatch({
      type: REQUEST_POSTS_SUCCESS,
      payload: posts
    })
  } catch (error) {
    dispatch({
      type: REQUEST_POSTS_FAIL,
      payload: error.message
    })
  }
}

export const requestPostsForCategory = category => async dispatch => {
  try {
    const res = await getPostsForCategory(category)
    const posts = await res.json()
    dispatch({ type: REQUEST_POSTS_SUCCESS, payload: posts })
  } catch (error) {
    dispatch({ type: REQUEST_POSTS_FAIL, payload: error.message })
  }
}

export const resetPosts = () => ({ type: RESET_POSTS })

export const setPostsOrder = order => ({
  type: POSTS_SET_ORDER,
  payload: order
})

export const removePost = post => async dispatch => {
  try {
    await deletePost(post.id)
    dispatch({ type: POSTS_DELETE, payload: post })
  } catch (error) {
    console.log(error.message)
  }
}

export const voteForPost = (post, option) => async dispatch => {
  try {
    const res = await postPostsVote(post.id, option)
    const postResponse = await res.json()
    dispatch({ type: POSTS_VOTE, payload: postResponse })
  } catch (error) {
    console.log(error.message)
  }
}

export const commentsForPost = post => async dispatch => {
  try {
    const res = await getPostsComments(post.id)
    const comments = await res.json()
    dispatch({ type: POSTS_COMMENTS, payload: comments })
  } catch (error) {
    console.log(error)
  }
}
