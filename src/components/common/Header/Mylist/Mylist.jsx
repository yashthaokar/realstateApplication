import React from 'react'
import { useEffect } from 'react'

const Mylist = () => {
  useEffect(() => {
    let favdata=JSON.parse(localStorage.getItem('sendData'));
    console.log(favdata)
  }, [])
  
  return (
    <div>Mylist</div>
  )
}

export default Mylist