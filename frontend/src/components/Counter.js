import React from 'react'
import { connect } from 'react-redux'
import { voteForPost, voteForComment } from '../actions'

class VoteCounter extends React.Component {

  handleIncrease = () => {
    const option = 'upVote'
    const { item, isPost } = this.props
    if (isPost) {
      this.props.voteForPost(item, option)
    } else {
      this.props.voteForComment(item, option)
    }
  }

  handleDecrease = () => {
    const option = 'downVote';
    const { item, isPost } = this.props
    if (isPost) {
      this.props.voteForPost(item, option)
    } else {
      this.props.voteForComment(item, option)
    }
  }

  render() {
    const { item } = this.props;
    return (
      <div className='votes'>
        <button title="vote up" onClick={this.handleIncrease}>
          <i className="material-icons">keyboard_arrow_up</i>
        </button>
        <span>{item.voteScore}</span>
        <button title="vote down" onClick={this.handleDecrease}>
          <i className="material-icons">keyboard_arrow_down</i>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {
  voteForPost,
  voteForComment
})(VoteCounter)
