import React from 'react'
import { connect } from 'react-redux'
import { requestPosts, resetPosts } from '../actions'
import PostList from './PostList'

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
        <div>
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
