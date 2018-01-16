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

class PostFormEdit extends React.Component {

  componentDidMount() {
    const { post_id } = this.props.match.params;
    this.props.fetchPostToEdit(post_id);
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
        <div>
          <h2>EDIT POST</h2>

          <form onSubmit={this.handleSubmit}>
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
              <div>
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
  loading: state.postEdit.loading,
  errorFetch: state.postEdit.errorFetch,
  post: state.postEdit.post,
  submitting: state.postEdit.submitting,
  errorSubmit: state.postEdit.errorSubmit,
  title: state.postEdit.title,
  body: state.postEdit.body,
  postEdited: state.postEdit.postEdited
})

export default connect(mapStateToProps, {
  requestPostToEdit,
  resetPostToEdit,
  setTextForPostEdit,
  postEdit
})(PostFormEdit)

