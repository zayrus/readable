import { combineReducers } from 'redux'

import categories from './categories'
import posts from './posts'
import newPost from './newPost'
import editPost from './editPost'
import post from './post'
import comments from './comments'
import commentCreate from './commentCreate'
import commentEdit from './commentEdit'

export default combineReducers({
  categories,
  posts,
  newPost,
  editPost,
  post,
  comments,
  commentCreate,
  commentEdit
})
