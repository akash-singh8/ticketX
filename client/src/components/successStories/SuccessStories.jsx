import React from 'react'
import "./successStories.css"
import stories from "../../assets/image 1.png"

export default function SuccessStories() {
  return (
    <section className='successStories' id='stories'>
        <div className='heading'>
            <div>FEATURED<br></br>
                 <span>SUCCESS STORIES</span></div>
        </div>
        <div className='story-details'>
            <div className='story-box'>
            <div className='story-image'></div>
            <div className='story-description'>SUCCESS STORIES</div>
            </div>
            <div className='more-stories'>
                <div className='story-heading'>MORE<br></br><span>STORIES</span></div>
                <img className='story-image-2' src={stories} alt="more-stories"></img>
            </div>
        </div>
    </section>
  )
}
