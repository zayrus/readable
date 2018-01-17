import React from 'react'

const Error = props => (
  <div className='show-error'>
    <i className="material-icons">error_outline</i>
    <span>{props.errorToShow}</span>
  </div>
)

export default Error

