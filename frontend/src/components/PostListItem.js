import React from 'react'
import { connect } from 'react-redux'

class PostListItem extends React.Component {

  render() {
    const { post } = this.props

    let component
      component = (
        <div className='post-list'>
            <div className='post-list-data'>
                {post.title}
              <div>
                <span>post by</span> <strong>{post.author}</strong>{' '}
                <span>{post.category.toUpperCase()}</span>
              </div>
              <span>{post.timestamp}</span>
            </div>
        </div>
      )
    return component
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { })(
  PostListItem
)
