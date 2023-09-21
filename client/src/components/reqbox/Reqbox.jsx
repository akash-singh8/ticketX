import React from 'react'
import "./reqbox.css"
import ViewReq from '../viewReq/ViewReq'
export default function Reqbox() {
  return (
    <div className='req-box'>
        <div className='container1-req'>
            <div className='ticket-title'>Title</div>
            <div className='ticket-detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm...</div>
        </div>
        <ViewReq/>
    </div>
  )
}
