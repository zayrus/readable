import { combineReducers } from 'redux'

import categories from './categories'
import posts from './posts'
import newPost from './newPost'

export default combineReducers({
  categories,
  posts,
  newPost
})
