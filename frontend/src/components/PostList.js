import React from 'react'
import { connect } from 'react-redux';
import PostListItem from './PostListItem';

const PostList = props => {
    let posts = []
    let component;
    if (props.loading) {
      component = (
        <div>Loading</div>
      );
    } else if (props.error) {
      component = (
        <div>{props.error}</div>
      );
    } else if (posts.length) {
      component = (
          <ul>
            {posts.map(post => <PostListItem key={post.id} post={post} />)}
          </ul>
      );
    } else {
      component = (
        <div>NO POSTS FOR THIS CATEGORY</div>
      );
    }
  
    return component;
}

const mapStateToProps = state => ({ posts: state.posts});

export default connect(mapStateToProps, {})(PostList);