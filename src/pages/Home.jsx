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
    <div className="container mt-5 mb-5 d-flex justify-content-between align-item-center">
      <div className="col-md-6 mt-5">
        <h4>All Videos</h4>
        <View/>
      </div>
      <div>
        Add Category
      </div>
    </div>
    </>    
  )
}

export default Home