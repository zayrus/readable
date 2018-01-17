import React from 'react'

const FormSelect = props => (
  <div className='form-select'>
    <label htmlFor={props.htmlFor}>Category</label>
    <select id={props.htmlFor} value={props.value} onChange={props.onChange}>
      <option value="none" disabled>
        Select...
      </option>
      {props.categories.map(category => (
        <option key={category.name} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  </div>
)

export default FormSelect
