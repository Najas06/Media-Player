import React from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import Videocard from '../components/Videocard'

function Home() {
  return (
    <>
    {/* <Add/>
    <Category/>
    <View/>
    <Videocard/> */}
    <div className="container mt-5 mb-5 d-flex justify-content-between align-item-center">
      <div className='add_videos'>
        <Add/>
      </div>
      <div>
        Watch Histrory
      </div>
    </div>
    </>    
  )
}

export default Home