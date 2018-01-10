import {
    REQUEST_POSTS_SUCCESS,
    REQUEST_POSTS_FAIL
} from '../actions/index'

const initialState = {
  loading: true,
  error: '',
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        posts: action.payload
      };
    case REQUEST_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: []
      };
    default:
      return state
  }
}
