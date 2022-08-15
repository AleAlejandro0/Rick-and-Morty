import React from 'react'
import useFetch from '../Hooks/useFetch'

const Residents = ({URL}) => {

  const resident =  useFetch(URL)

  return (
    <div className='residents_container'>
      <header>
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