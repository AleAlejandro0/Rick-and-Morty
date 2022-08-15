import React from 'react'
import useFetch from '../Hooks/useFetch'

const Residents = ({URL}) => {

  const resident =  useFetch(URL)
  const status = resident?.status
  let statusColor = '#505154';

  if(status == 'Alive'){
    statusColor = '#7093ff'
  }else if(status == 'Dead'){
  statusColor = '#e47878'
  }

  console.log(status)
  return (
    <div className='residents_container'>
      <header>
          <div className='status'style={{backgroundColor: statusColor}}>{resident?.status}</div>
        <img src={resident?.image} alt={`${resident?.name}'s photo`} />
      </header>
      <main>
          <h3>{resident?.name}</h3>
          <ul>
             <li>
               <span>Races: </span>
               {resident?.species}
             </li>

            <li>
              <span>From: </span>
              {resident?.origin.name}
            </li>

            <li>
              <span>Performance: </span>
              {resident?.episode.length}
            </li>
          </ul>
      </main>
    </div>
  )
}

export default Residents