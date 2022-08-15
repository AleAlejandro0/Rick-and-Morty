import './App.css'
import Location from './Components/Location'
import Residents from './Components/Residents'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [requestAPI, setRequestAPI] = useState()
  const [find, setFind] = useState('')


  useEffect(() => {
    let randomID
    if(find == ''){
      randomID = (Math.floor( Math.random() * 126) + 1)
    }else{
      randomID = find
    }
       const URL = `https://rickandmortyapi.com/api/location/${randomID}`
       axios.get(URL)
            .then(res => setRequestAPI(res.data) )
            .catch(err => console.log(err))
  }, [find])
  
  console.log(requestAPI)

  /* SEARCH BY SUBMITED ID */

  const submitedInfo = e => {
    e.preventDefault()
    setFind( e.target.text.value )
  }
  
  if(isNaN(find)){
    alert('Type a Number value')
  }else if(find > 126 || find < 0){
    alert('Type a number between 1 and 126')
  }

  return (
    <div className="App">
      <div className='header_container'>
        <div className='image_container'></div>
        <h1>Rick and Morty Dimensions</h1>
         <form onSubmit={submitedInfo}>
           <input id='text'type="text" placeholder='Type a dimension ID'/>
           <button>Find</button>
         </form>
      </div>
      <Location requestAPI = {requestAPI} /> 
      <div className='card_residents'>
        {
           requestAPI?.residents.map(resident => (
             <Residents
             key={resident}
             URL={resident}
             />
           ))
        }
      </div>
    </div>
  )
}

export default App
