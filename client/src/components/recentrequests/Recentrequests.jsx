import React from 'react'
import Location from '../location/Location'
import Reqbox from '../reqbox/Reqbox'
import Pagenavigation from '../pagenavigation/Pagenavigation'
export default function Recentrequests() {
  
  return (
    <>
        <section className="admin_section">
        <div className="container">
          <div className="heading">
              RECENT REQUESTS 
          </div>
        </div>
        
              
            
          
        <Location/>
        <div className='requests'>

        <Reqbox />
        <Reqbox />
        <Reqbox />
        <Reqbox />
        </div>
        <Pagenavigation />
      </section>
    </>
  )
}
