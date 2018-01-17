import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removePost, commentsForPost } from '../actions'
import Counter from './Counter'
import format from 'date-fns/format'

class PostListItem extends React.Component {
  componentDidMount() {
    const { post, commentsForPost } = this.props
    commentsForPost(post)
  }

  handleRemove = () => {
    const { post, removePost } = this.props
    removePost(post)
  }

  render() {
    const { post } = this.props

    let component
    if (post.deleted) {
      component = <div />
    } else {
      const commentCount = post.comments ? post.comments.length : 0
      component = (
        <li className='list-item'>
          <Counter item={post} isPost />
          <div className='post-data'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <NavLink className='post-link-detail' to={`/${post.category}/${post.id}`}>
                {post.title}
              </NavLink>
              <NavLink className='post-edit' to={`/${post.category}/${post.id}/edit`}>
                <i className="material-icons">edit</i>
              </NavLink>
            </div>

            <div>
              <span>post by</span> <strong>{post.author}</strong>{' '}
              <span>has</span> <strong>{commentCount}</strong>{' '}
              <span>comment{commentCount !== 1 && 's'}</span>{' '}
              <NavLink className='tag' to={`/${post.category}`} name={post.category}>
                {post.category.toUpperCase()}
              </NavLink>
            </div>
          </div>

          <div className='format-date'>
            <span>{format(new Date(post.timestamp), 'ddd MMM D YYYY')}</span>
          </div>

          <div className='delete-post' title="delete post" onClick={this.handleRemove}>
            <i className="material-icons">delete</i>
          </div>
        </li>
      )
    }
    return component
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { removePost, commentsForPost})(
  PostListItem
)
