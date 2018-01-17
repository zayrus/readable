import React from 'react'
import { connect } from 'react-redux'
import { setPostsOrder } from '../actions'
import Button from 'material-ui/Button';

class PostOrder extends React.Component {

  orderByDate = () => {
    this.props.setPostsOrder('timestamp')
  }

  orderByScore = () => {
    this.props.setPostsOrder('voteScore')
  }

  render() {
    const { order} = this.props
    return (
      <div>
        <span className='grey'>Order by:</span>
        <Button color="primary"
          onClick={this.orderByDate}
          selected={order === 'timestamp'}
        >
          DATE
        </Button>
        <span>/</span>
        <Button color="primary"
          onClick={this.orderByScore}
          selected={order === 'voteScore'}
        >
          SCORE
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ order: state.posts.order })

export default connect(mapStateToProps, { setPostsOrder })(PostOrder)
