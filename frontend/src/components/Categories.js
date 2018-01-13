import React from 'react'
import { connect } from 'react-redux'
import { requestPostsForCategory, resetPosts} from '../actions'
import PostList from './PostList'
import PostOrder from './PostOrder'

class Category extends React.Component {

  componentDidMount() {
    const { category } = this.props.match.params
    this.props.requestPostsForCategory(category)
  }

  componentWillUpdate(nextProps, nextState) {
    const currentCategory = this.props.match.params.category
    const nextCategory = nextProps.match.params.category
    if (currentCategory !== nextCategory) {
      this.props.resetPosts()
      this.props.requestPostsForCategory(nextCategory)
    }
  }

  componentWillUnmount() {
    this.props.resetPosts()
  }

  render() {
    const { match, loading, error, posts } = this.props

    return (
      <div>
        <header>
          <h2>{match.params.category.toUpperCase()} POSTS</h2>
          <PostOrder />
        </header>

        <PostList loading={loading} error={error} posts={posts} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { loading, error, posts } = state.posts
  return { loading, error, posts }
}

export default connect(mapStateToProps, {
  requestPostsForCategory,
  resetPosts
})(Category)
