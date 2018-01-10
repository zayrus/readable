import {
    REQUEST_POSTS,
    REQUEST_POSTS_SUCCESS,
    REQUEST_POSTS_FAIL
} from '../actions/index'
const initialState = {
    postList: {posts: [], error: null, loading: false}
}
export function posts(state = initialState, action) {
    let error
    switch (action.type) {
        case REQUEST_POSTS :
          return {
            ...state,
            postList: {post: [], error: null, loading: true}
          }
        case REQUEST_POSTS_SUCCESS:
          return {
            ...state,
            postList: {
              posts: action.payload, error: null, loading: false,
              sortType: action.sortType
            }
          }
    
        case REQUEST_POSTS_FAIL:
          error = action.payload
          return {...state, postList: {posts: [], error: error, loading: false}}
        default :
          return state
      }
}

export default posts