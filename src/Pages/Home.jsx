import React from 'react'
import Bollywood from './bollywood/Bollywood'
import './Page.css'


function Home() {
  
  return (
  
    <>
      <div className='home-container'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg' className='first'></img>
      <img src='https://www.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg' className='second'></img>
      <img src='https://i.insider.com/5e83756d487c225d3b6e1c86?width=1000&format=jpeg&auto=webp' className='third'></img>
      </div>
      <Bollywood/>
      
      
    </>
    
  )
}

export default Home
