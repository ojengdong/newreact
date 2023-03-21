import React from 'react'
import { useEffect, useState } from 'react'
import './modal.css'

const Modal = () => {
  let [modal, setModal] = useState(false)
  // useEffect(()=>{setTimeout(()=>{setModal(false)},2000)})
  useEffect(()=>{setTimeout(()=>{setModal(true)},2000)})
  
  return (
    <div>
      {
        modal == true ? <h1 className='modal'>2초 후에 사라지는 모달</h1> : null
      }
    </div>
  )
}

export default Modal