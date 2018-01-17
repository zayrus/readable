import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
  setTextForPostCreate,
  setCategoryForPostCreate,
  resetPostCreate,
  postCreate
} from '../actions'

import ShowError from './ShowError'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormSubmit from './FormSubmit'
import FormTextarea from './FormTextarea'

class NewPost extends React.Component {

  componentWillUnmount() {
    this.props.resetPostCreate();
  }

  handleSubmit = event => {
    event.preventDefault()
    const author = this.props.author.trim()
    const title = this.props.title.trim()
    const body = this.props.body.trim()
    const { category } = this.props
    const values = { author, title, body, category }
    this.props.postCreate(values)
  }

  handleChange = event => {
    const { name, value } = event.target
    this.props.setTextForPostCreate(name, value)
  }

  handleSelect = event => {
    this.props.setCategoryForPostCreate(event.target.value)
  }

  render() {
    console.log(this.props)
    const {
      submitting,
      error,
      author,
      title,
      category,
      body,
      postNew
    } = this.props
    const disabled =
      !author.trim() || !title.trim() || !body.trim() || category === 'none'

    let component
    if (postNew && postNew.id) {
      component = <Redirect to={`/${postNew.category}/${postNew.id}`} />
    } else {
      component = (
        <div className='category'>
          <header>
            <h2>NEW POST</h2>
          </header>
          <form className='new-post-form' onSubmit={this.handleSubmit}>
            <FormInput
              label="Author"
              htmlFor="createAuthor"
              name="author"
              value={author}
              onChange={this.handleChange}
            />

            <FormSelect
              htmlFor="createCategory"
              value={category}
              onChange={this.handleSelect}
              categories={this.props.categories}
            />

            <FormInput
              label="Title"
              htmlFor="createTitle"
              name="title"
              value={title}
              onChange={this.handleChange}
            />

            <FormTextarea
              label="Body"
              htmlFor="createBody"
              name="body"
              value={body}
              onChange={this.handleChange}
              large
            />

            {error && (
              <div className='middle'>
                <ShowError msg={error} />
              </div>
            )}

            <FormSubmit
              text="Add post"
              submitting={submitting}
              disabled={disabled}
            />
          </form>
        </div>
      )
    }

    return component
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  submitting: state.newPost.submitting,
  error: state.newPost.error,
  author: state.newPost.author,
  title: state.newPost.title,
  body: state.newPost.body,
  category: state.newPost.category,
  postNew: state.newPost.postNew
})

export default connect(mapStateToProps, {
  setTextForPostCreate,
  setCategoryForPostCreate,
  resetPostCreate,
  postCreate
})(NewPost)