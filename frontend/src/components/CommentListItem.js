import React from 'react'
import { connect } from 'react-redux'
import { setCommentToEdit, removeComment } from '../actions'
import CommentFormEdit from './CommentFormEdit'
import VoteCounter from './Counter'

class CommentListItem extends React.Component {

  handleRemove = () => {
    const { comment, removeComment } = this.props
    removeComment(comment)
  }

  startEditing = () => {
    const { comment, setCommentToEdit } = this.props
    setCommentToEdit(comment.id)
  }

  render() {
    const { comment } = this.props

    let component
    if (this.props.editingCommentId === comment.id) {
      component = <CommentFormEdit comment={comment} />
    } else {
      component = (
        <li>
          <VoteCounter item={comment} />

          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>{comment.body}</div>
              <button onClick={this.startEditing}>
                <i className="material-icons">edit</i>
              </button>
            </div>
            <div>
              <span>comment by {comment.author}</span>
            </div>
          </div>

          <div>
            <span>{format(new Date(comment.timestamp), 'ddd')}</span>
            <div>{format(new Date(comment.timestamp), 'MMM D')}</div>
            <span>{format(new Date(comment.timestamp), 'YYYY')}</span>
          </div>

          <button title="delete post" onClick={this.handleRemove}>
            <i className="material-icons">delete</i>
          </button>
        </li>
      )
    }
    return component
  }
}

const mapStateToProps = state => ({
  editingCommentId: state.commentEdit.editingCommentId
})

export default connect(mapStateToProps, { setCommentToEdit, removeComment })(
  CommentListItem
)
