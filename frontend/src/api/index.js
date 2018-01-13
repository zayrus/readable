import shortid from 'shortid'

const api = 'http://localhost:3001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8)

const headers = {
  Accept: 'application/json',
  Authorization: token
}

export const getPosts = () => fetch(`${api}/posts`, { headers })
export const getCategories = () => fetch(`${api}/categories`, { headers })

export const getPostsForCategory = category => fetch(`${api}/${category}/posts`, { headers })

export const getPost = id => fetch(`${api}/posts/${id}`, { headers })

export const getCommentsForPost = id => fetch(`${api}/posts/${id}/comments`, { headers })

export const postNewPost = values => {
  const params = { ...values, id: shortid.generate(), timestamp: Date.now() }
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}

export const postNewComment = values => {
  const params = { ...values, id: shortid.generate(), timestamp: Date.now() }
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}

export const putEditPost = (values, postId) => {
  const params = { ...values }
  return fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}

export const putEditComment = (values, commentId) => {
  const params = { ...values, timestamp: Date.now() }
  return fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}

export const deletePost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })

export const deleteComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })

export const postPostsVote = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  })

export const postCommentsVote = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  })

export const getPostsComments = postId => fetch(`${api}/posts/${postId}/comments`, { headers })