import React from 'react'

const Location = ({requestAPI}) => {

  return (
    <div className='location_container'>
      <span className='dimension_name'>Name:</span><h2>{requestAPI?.name}</h2>
        <ul className='location_list'>
          <li><span>Type:</span>{requestAPI?.type}</li>
          <li><span>Dimension:</span>{requestAPI?.dimension}</li>
          <li><span>Residents:</span>{requestAPI?.residents.length}</li>
        </ul>
    </div>
  )
}

export default Location