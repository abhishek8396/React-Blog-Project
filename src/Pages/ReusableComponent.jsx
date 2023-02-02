import React from 'react'
import { Link } from 'react-router-dom'


const ReusableComponent = ({props}) => {
  return (
    <>
      {props.map((data, i) =>
        <div className='bollywood-tile'>
            <Link to={`${data.title}`} state={{data}}>
              <img src={data.img} alt="empty"/>
              <p className='title'>{data.title}</p>
              <p className='description'>{data.description}</p>
              <p className='date'>{data.releaseDate}</p>
            </Link>
        </div>
      )}
    </>
  )
}

export default ReusableComponent
