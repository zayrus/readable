import {
    REQUEST_CATEGORIES_SUCCESS,
    REQUEST_CATEGORIES_FAIL
} from '../actions'

const initialState = {
  loading: true,
  error: '',
  categories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        posts: action.payload
      };
    case REQUEST_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state
  }
}

