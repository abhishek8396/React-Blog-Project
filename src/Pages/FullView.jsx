import React from 'react'
import { useLocation } from 'react-router-dom'

const FullView = () => {
  const data= useLocation().state.data;
  return (
    <div className='full-view'>
      <span>{data.title}</span>
      <img src={data.img} alt="empty" className=''full-view-image/>
      <p>{data.description}</p>
    </div>
  )
}

export default FullView;
