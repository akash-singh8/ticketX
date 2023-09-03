import React from 'react'
import "./adminsection.css"
import Reqbox from '../reqbox/Reqbox'
export default function Adminsection() {
  return (
    <>
       <section className='admin_section'>
       <div className='heading'>
            <div>REQUESTS FOR<br></br>
                 <span>BUSINESS STRATERGY</span></div>
        </div>
        <div className='center'>

        <div className="req-status admin_status">
              <div className="pending">Pending</div>
              <div className="inreview">Inreview</div>
              <div className="resolved">Resolved</div>
          </div>
        </div>
        <Reqbox/>
        <Reqbox/>
        <Reqbox/>
        <Reqbox/>
       </section>
    </>
  )
}
