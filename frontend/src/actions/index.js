export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS'
export const REQUEST_POSTS_FAIL = 'REQUEST_POSTS_FAIL'

export function requestPosts({post}) {
    return {
        type: REQUEST_POSTS,
        payload: post

    }
}

export const requestPostSuccess = (activePost) => {
    return {
      type: REQUEST_POSTS_SUCCESS, payload: activePost
    }
}

export const requestPostsFail = (error) => {
    return {
      type: REQUEST_POSTS_FAIL, payload: error
    }
}