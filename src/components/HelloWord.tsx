import config from '../../config/index'
import React from 'react'

const HelloWorld = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>{config.api}</p>
    </>
  )
}

export { HelloWorld }
