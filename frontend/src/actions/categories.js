import { getCategories } from '../api'

export const REQUEST_CATEGORIES_SUCCESS = 'REQUEST_CATEGORY_SUCCESS'
export const REQUEST_CATEGORIES_FAIL = 'REQUEST_CATEGORY_FAIL'

export const requestCategories = () => async dispatch => {
  try {
    const res = await getCategories()
    const { categories } = await res.json()
    dispatch({ type: REQUEST_CATEGORIES_SUCCESS, payload: categories })
  } catch (error) {
    dispatch({ type: REQUEST_CATEGORIES_FAIL, payload: error.message })
  }
}

