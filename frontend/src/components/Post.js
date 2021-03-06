import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { requestPost, resetPost } from '../actions'
import ShowError from './ShowError'
import Loading from './Loading'
import CommentFormNew from './CommentFormNew'
import CommentList from './CommentList'
import PostListItem from './PostListItem'

class Post extends React.Component {

  componentDidMount() {
    const { post_id } = this.props.match.params
    this.props.requestPost(post_id)
  }

  componentWillUnmount() {
    this.props.resetPost()
  }

  render() {
    const { loading, error, post } = this.props

    let component
    if (loading) {
      component = (
        <div>
          <Loading />
      </div>
      )
    } else if (error) {
      component = (
        <div>
          <ShowError errorToShow={error} />
        </div>
      )
    } else if (post.deleted || !post.id) {
      component = <Redirect to="/" />
    } else {
      component = (
        <div>
          <div className='category'>
            <header>
              <h2>POST</h2>
            </header>
            <div>
              <PostListItem post={this.props.post} />
              <p className='post-body'>{this.props.post.body}</p>
            </div>
          </div>

          <div className='comments-container'>
            <h2>COMMENTS</h2>
            <CommentList parentId={this.props.post.id} />
            <CommentFormNew parentId={this.props.post.id} />
          </div>
        </div>
      )
    }

    return component
  }
}

const mapStateToProps = state => ({
  loading: state.post.loading,
  error: state.post.error,
  post: state.post.post
})

export default connect(mapStateToProps, { requestPost, resetPost })(Post)

