import React from 'react'
import "./styles/categories.css"

export const Category = () => {
  return (
    <div className='cate-con'>
      <h2 className='cate-lead'>This are the categories Available</h2>
      <ul>
        <li>Action</li>
        <li>Biography</li>
        <li>History</li>
        <li>Horror</li>
        <li>Kids</li>
        <li>Learning</li>
        <li>Sci-Fi</li>
      </ul>
    </div>
  )
}
