import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { requestCategories } from '../actions'
import ShowError from '../components/ShowError'
import Loading from '../components/Loading'

class Header extends React.Component {
  componentDidMount() {
    this.props.requestCategories()
  }

  render() {
    const { loading, error, categories } = this.props
    let displayCategories
    if (loading) {
      displayCategories = <Loading />
    } else if (error) {
      displayCategories = <ShowError errorToShow={error} />
    } else {
      displayCategories = categories.map(category => (
        <NavLink
          to={`/${category.name}`}
          key={category.name}
          name={category.name}
        >
          {category.name.toUpperCase()}
        </NavLink>
      ))
    }

    return (
      <div>
        <NavLink to="/">
          <span>Readable</span>
        </NavLink>

        <div>{displayCategories}</div>

        <NavLink to="/new-post">
          <span>New Post</span>
        </NavLink>
      </div>

    )
  }
}

const mapStateToProps = state => {
  const { loading, error, categories } = state.categories
  return { loading, error, categories }
}

export default connect(mapStateToProps, { requestCategories })(Header)

