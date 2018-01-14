import React from 'react'

const FormTextarea = props => (
  <div>
    <label htmlFor={props.htmlFor}>{props.label}</label>
    <textarea
      id={props.htmlFor}
      name={props.name}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    />
  </div>
)

export default FormTextarea
