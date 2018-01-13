import React from 'react'
import { connect } from 'react-redux'
import { setPostsOrder } from '../actions'

class PostOrder extends React.Component {

  orderByDate = () => {
    this.props.setPostsOrder('timestamp')
  }

  orderByScore = () => {
    this.props.setPostsOrder('voteScore')
  }

  render() {
    const { order } = this.props

    return (
      <div>
        <span>Order by:</span>
        <button
          onClick={this.orderByDate}
          selected={order === 'timestamp'}
        >
          DATE
        </button>
        <span>/</span>
        <button
          onClick={this.orderByScore}
          selected={order === 'voteScore'}
        >
          SCORE
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ order: state.posts.order })

export default connect(mapStateToProps, { setPostsOrder })(PostOrder)
