import React from 'react'

const FormInput = props => (
  <div>
    <label htmlFor={props.htmlFor}>{props.label}</label>
    <input
      type="text"
      id={props.htmlFor}
      name={props.name}
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  </div>
)

export default FormInput
