import React from 'react'
import { Link } from 'react-router-dom'

function Watchhistory() {
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h4>Watch History</h4>
        <Link to='/home' style={{textDecoration:"none", color:"white", fontSize:"15px", fontWeight:"500"}}>
        <i class="fa-solid fa-arrow-left me-3"></i>Back to Home
        </Link>
      </div>
      <table className='table container mb-5 text-center'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          <tr>
          <td>1</td>
          <td>Heeriye</td>
          <td>https://youtu.be/RLzC55ai0eo?si=ano9VCyveWqzBEF8</td>
          <td>03-01-2024</td>
          <td>Delete</td>
          </tr>
          <tr>
          <td>2</td>
          <td>Heeriye</td>
          <td>https://youtu.be/RLzC55ai0eo?si=ano9VCyveWqzBEF8</td>
          <td>03-01-2024</td>
          <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </>
    )
}

export default Watchhistory