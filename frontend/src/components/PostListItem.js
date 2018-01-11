import React from 'react';
import { connect } from 'react-redux';

class PostListItem extends React.Component {

  render() {
    const { post } = this.props;

    let component;
      component = (
        <div>
            <div>
                {post.title}
            </div>
            <div>
                <span>post by</span> <strong>{post.author}</strong>{' '}
                <span>{post.category.toUpperCase()}</span>
                <span>{post.timestamp}</span>
            </div>
            <div>{post.timestamp}</div>
            <span>{post.timestamp}</span>
        </div>
      );
    return component;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { })(
  PostListItem
);
