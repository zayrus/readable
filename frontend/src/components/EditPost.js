import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  requestPostToEdit,
  resetPostToEdit,
  setTextForPostEdit,
  postEdit
} from '../actions'
import ShowError from './ShowError'
import FormInput from './FormInput'
import FormSubmit from './FormSubmit'
import FormTextarea from './FormTextarea'
import Loading from './Loading'

class EditPost extends React.Component {

  componentDidMount() {
    const { post_id } = this.props.match.params;
    this.props.requestPostToEdit(post_id);
  }

  componentWillUnmount() {
    this.props.resetPostToEdit();
  }

  handleSubmit = event => {
    event.preventDefault();
    const { post } = this.props;
    const title = this.props.title.trim() || post.title;
    const body = this.props.body.trim() || post.body;
    const values = { title, body };
    this.props.postEdit(values, post.id);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.props.setTextForPostEdit(name, value);
  };

  render() {
    const {
      loading,
      errorFetch,
      post,
      submitting,
      errorSubmit,
      title,
      body,
      postEdited
    } = this.props;

    let component;
    if (postEdited.id) {
      component = <Redirect to={`/${postEdited.category}/${postEdited.id}`} />;
    } else if (loading) {
      component = (
        <div>
          <Loading />
        </div>
      );
    } else if (errorFetch) {
      component = (
        <div>
          <ShowError errorToShow={this.props.errorFetch} />
        </div>
      );
    } else {
      component = (
        <div className='category'>
          <header>
            <h2>EDIT POST</h2>
          </header>
          <form className='post-form' onSubmit={this.handleSubmit}>
            <FormInput
              label="Author"
              htmlFor="editPostAuthor"
              value={post.author}
              disabled
            />

            <FormInput
              label="Category"
              htmlFor="editPostCategory"
              value={post.category}
              disabled
            />

            <FormInput
              label="Title"
              htmlFor="editPostTitle"
              name="title"
              defaultValue={post.title || title}
              onChange={this.handleChange}
            />

            <FormTextarea
              label="Body"
              htmlFor="editPostBody"
              name="body"
              defaultValue={post.body || body}
              onChange={this.handleChange}
              large
            />

            {errorSubmit && (
              <div className='middle'>
                <ShowError errorToShow={errorSubmit} />
              </div>
            )}

            <FormSubmit text="Edit post" submitting={submitting} />
          </form>
        </div>
      )
    }

    return component
  }
}

const mapStateToProps = state => ({
  loading: state.editPost.loading,
  errorFetch: state.editPost.errorFetch,
  post: state.editPost.post,
  submitting: state.editPost.submitting,
  errorSubmit: state.editPost.errorSubmit,
  title: state.editPost.title,
  body: state.editPost.body,
  postEdited: state.editPost.postEdited
})

export default connect(mapStateToProps, {
  requestPostToEdit,
  resetPostToEdit,
  setTextForPostEdit,
  postEdit
})(EditPost)

