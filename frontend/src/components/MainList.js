import React from 'react'
import { connect } from 'react-redux'
import { requestPosts, resetPosts } from '../actions'
import PostList from './PostList'
import PostOrder from './PostOrder'


class MainList extends React.Component {
    componentDidMount() {
        this.props.requestPosts()
    }

    componentWillUnmount() {
      this.props.resetPosts()
    }

    render() {
      const { loading, error, posts } = this.props
      
      return (
        <div className='category'>
        <header>
          <h2>All posts</h2>
          <PostOrder />
        </header>
          <PostList loading={loading} error={error} posts={posts} />
        </div>
      )
    }
}

const mapStateToProps = state => {
  const { loading, error, posts } = state.posts
  return { loading, error, posts}
}

export default connect(mapStateToProps, {
    requestPosts,
    resetPosts
  })(MainList)
