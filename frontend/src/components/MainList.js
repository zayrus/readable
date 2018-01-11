import React from 'react'
import { connect } from 'react-redux';
import { requestPosts } from '../actions';
import PostList from './PostList';

class MainList extends React.Component {
    componentDidMount() {
        this.props.requestPosts();
    }
    render() {
      const { loading, error, posts } = this.props;
      return (
        <div>
          <header>
            <h2>List of All Posts</h2>
          </header>
          <PostList loading={loading} error={error} posts={posts} />
        </div>
      )
    }
}

const mapStateToProps = state => {
  console.log(state)
  const { loading, error, posts } = state
  return { loading, error, posts};
};

export default connect(mapStateToProps, {
    requestPosts
  })(MainList);
