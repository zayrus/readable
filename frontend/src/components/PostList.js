import React from 'react'
import { connect } from 'react-redux'
import PostListItem from './PostListItem'
import orderBy from 'lodash/orderBy'

const PostList = props => {
    let posts = []
    if (props.loading === false && props.posts.length) {
      const filteredPosts = props.posts.filter(post => post.deleted === false)
      posts = orderBy(filteredPosts, [props.order], ['desc'])
    }
    let component
    if (props.loading) {
      component = (
        <div className='middle'>Loading</div>
      )
    } else if (props.error) {
      component = (
        <div className='middle'>{props.error}</div>
      )
    } else if (posts.length) {
      component = (
          <ul>
            {posts.map(post => <PostListItem key={post.id} post={post} />)}
          </ul>
      )
    } else {
      component = (
        <div className='middle'>0 posts founded for this category</div>
      )
    }
    return component
}

const mapStateToProps = state => ({ order: state.posts.order })

export default connect(mapStateToProps, {})(PostList)
