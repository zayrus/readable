import React from 'react'
import ReactLoading from 'react-loading'

const Loading = props => (
  <ReactLoading
    type={props.type || 'cylon'}
    color={props.color || '#ff7a37'}
    delay={props.delay || 1000}
    height={props.height || 64}
    width={props.width || 64}
  />
);

export default Loading;

