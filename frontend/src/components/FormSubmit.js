import React from 'react'
import Loading from './Loading'

const FormSubmit = props => (
  <button className='form-submit' type="submit" disabled={props.disabled}>
    <span>{props.text}</span>
    {props.submitting && <Loading color="#fff" />}
  </button>
)

export default FormSubmit
