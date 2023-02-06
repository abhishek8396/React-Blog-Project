import React from 'react'
import { useLocation } from 'react-router-dom'

const FullView = () => {
  const data= useLocation().state.data;
  return (
    <div className='full-view'>
      <img src={data.img} alt="empty" className=''full-view-image/>
      <div>{data.title}</div>
      <p>{data.description}</p>
      <p>{data.releaseDate}</p>
    </div>
  )
}

export default FullView;
