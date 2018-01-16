import { getCommentsForPost, deleteComment, postCommentsVote } from '../api'

export const REQUEST_COMMENTS_SUCCESS = 'REQUEST_COMMENTS_SUCCESS'
export const REQUEST_COMMENTS_FAIL = 'REQUEST_COMMENTS_FAIL'
export const RESET_COMMENTS = 'RESET_COMMENTS'
export const COMMENTS_DELETE = 'COMMENTS_DELETE'
export const COMMENTS_VOTE = 'COMMENTS_VOTE'

export const requestComments = id => async dispatch => {
  try {
    const res = await getCommentsForPost(id)
    const comments = await res.json()
    dispatch({ type: REQUEST_COMMENTS_SUCCESS, payload: comments })
  } catch (error) {
    dispatch({ type: REQUEST_COMMENTS_FAIL, payload: error.message })
  }
}

export const resetComments = () => ({ type: RESET_COMMENTS })

export const removeComment = comment => async dispatch => {
  try {
    await deleteComment(comment.id)
    dispatch({ type: COMMENTS_DELETE, payload: comment })
  } catch (error) {
    console.log(error.message)
  }
}

export const voteForComment = (comment, option) => async dispatch => {
  try {
    const res = await postCommentsVote(comment.id, option)
    const commentResponse = await res.json()
    dispatch({ type: COMMENTS_VOTE, payload: commentResponse })
  } catch (error) {
    console.log(error.message)
  }
}

