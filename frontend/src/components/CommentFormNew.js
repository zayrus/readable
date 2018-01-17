import React from 'react';
import { connect } from 'react-redux';
import {
  setTextForCommentCreate,
  resetCommentCreate,
  commentCreate
} from '../actions'

import ShowError from './ShowError'
import FormInput from './FormInput'
import FormSubmit from './FormSubmit'
import FormTextarea from './FormTextarea'

class CommentFormNew extends React.Component {

  componentWillUnmount() {
    this.props.resetCommentCreate();
  }

  handleSubmit = event => {
    event.preventDefault();
    const author = this.props.author.trim();
    const body = this.props.body.trim();
    const values = { author, body, parentId: this.props.parentId };
    this.props.commentCreate(values);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.props.setTextForCommentCreate(name, value);
  };

  render() {
    const { submitting, error, author, body } = this.props;
    const disabled = !author.trim() || !body.trim();

    return (
      <div className='new-comment'>
        <form className='create-comment-form' onSubmit={this.handleSubmit}>
          <FormInput
            label="Author"
            htmlFor="createCommentAuthor"
            name="author"
            value={author}
            onChange={this.handleChange}
          />

          <FormTextarea
            label="Body"
            htmlFor="createCommentBody"
            name="body"
            value={body}
            onChange={this.handleChange}
          />

          {error && (
            <div className='middle'>
              <ShowError errorToShow={error} />
            </div>
          )}

          <FormSubmit
            text="Add comment"
            submitting={submitting}
            disabled={disabled}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { submitting, error, author, body } = state.commentCreate
  return { submitting, error, author, body }
}

export default connect(mapStateToProps, {
  setTextForCommentCreate,
  resetCommentCreate,
  commentCreate
})(CommentFormNew)

