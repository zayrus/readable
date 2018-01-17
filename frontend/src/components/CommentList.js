import React from 'react'
import { connect } from 'react-redux'
import orderBy from 'lodash/orderBy'
import { resetCommentToEdit, requestComments, resetComments } from '../actions'
import ShowError from './ShowError'
import Loading from './Loading'
import CommentListItem from './CommentListItem'

class CommentList extends React.Component {

  componentDidMount() {
    const { parentId, requestComments } = this.props
    requestComments(parentId)
  }

  componentWillUnmount() {
    this.props.resetComments()
    this.props.resetCommentToEdit()
  }

  render() {
    const { loading, error, comments } = this.props

    let allComments = []
    if (loading === false && comments.length) {
      const filteredComments = comments.filter(
        comment => comment.deleted === false
      )
      allComments = orderBy(filteredComments, ['timestamp'], ['asc'])
    }

    let component
    if (loading) {
      component = (
        <div className='middle'>
          <Loading />
        </div>
      )
    } else if (error) {
      component = (
        <div className='middle'>
          <ShowError errorToShow={error} />
        </div>
      )
    } else if (allComments.length) {
      component = (
        <ul>
          {allComments.map(comment => (
            <CommentListItem key={comment.id} comment={comment} />
          ))}
        </ul>
      )
    } else {
      component = (
        <div className='middle'>
          <div>This post haven't comments. Be the first! :)</div>
        </div>
      )
    }

    return component
  }
}

const mapStateToProps = state => ({
  loading: state.comments.loading,
  error: state.comments.error,
  comments: state.comments.comments
})

export default connect(mapStateToProps, {
  resetCommentToEdit,
  requestComments,
  resetComments
})(CommentList)

