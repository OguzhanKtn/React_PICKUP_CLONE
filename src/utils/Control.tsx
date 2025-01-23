import React from 'react'
import Navbar from './Navbar'
import Contact from '../pages/Contact'

function Control(props:{item: JSX.Element}) {
  return (
    <>
        <Navbar />
        {props.item}
        <Contact />
    </>
  )
}

export default Control