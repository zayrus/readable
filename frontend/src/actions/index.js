import { getPosts } from '../api'

export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS'
export const REQUEST_POSTS_FAIL = 'REQUEST_POSTS_FAIL'

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
};

