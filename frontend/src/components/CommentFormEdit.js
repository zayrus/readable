import React from 'react'
import { connect } from 'react-redux'
import {
  resetCommentToEdit,
  setTextForCommentEdit,
  commentEdit
} from '../actions'

import ShowError from './ShowError'
import FormInput from './FormInput'
import FormSubmit from './FormSubmit'
import FormTextarea from './FormTextarea'

class CommentFormEdit extends React.Component {

  handleSubmit = event => {
    event.preventDefault()
    const { comment } = this.props
    const body = this.props.body.trim() || comment.body
    const values = { body }
    this.props.commentEdit(values, comment.id)
  }

  handleChange = event => {
    const { name, value } = event.target
    this.props.setTextForCommentEdit(name, value)
  }

  cancelEditing = () => {
    this.props.resetCommentToEdit()
  }

  render() {
    const { comment, submitting, error, body } = this.props

    return (
      <div>
        <button onClick={this.cancelEditing}>Cancel edit</button>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Author"
            htmlFor="editCommentAuthor"
            name="author"
            value={comment.author}
            disabled
          />

          <FormTextarea
            label="Body"
            htmlFor="editCommentBody"
            name="body"
            defaultValue={comment.body || body}
            onChange={this.handleChange}
          />

          {error && (
            <div>
              <ShowError errorToShow={error} />
            </div>
          )}

          <FormSubmit text="Edit comment" submitting={submitting} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  editingCommentId: state.commentEdit.editingCommentId,
  submitting: state.commentEdit.submitting,
  error: state.commentEdit.error,
  body: state.commentEdit.body
})

export default connect(mapStateToProps, {
  resetCommentToEdit,
  setTextForCommentEdit,
  commentEdit
})(CommentFormEdit)

