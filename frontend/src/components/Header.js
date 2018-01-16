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
        <NavLink className='tag'
          to={`/${category.name}`}
          key={category.name}
          name={category.name}
        >
          {category.name.toUpperCase()}
        </NavLink>
      ))
    }

    return (
      <div className='header'>
        <NavLink className='header-title' to="/">
          <i className='material-icons md-48'>home</i>
        </NavLink>

        <div className='categories-container'>{displayCategories}</div>
        <div className='add-post'>
          <NavLink to="/new-post">
            <i className="material-icons">add</i>
          </NavLink>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  const { loading, error, categories } = state.categories
  return { loading, error, categories }
}

export default connect(mapStateToProps, { requestCategories })(Header)

