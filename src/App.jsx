import './App.css'
import Location from './Components/Location'
import Residents from './Components/Residents'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FilterList from './Components/FilterList'
import Error from './Components/Error'

function App() {
//Request random ID 
  const [requestAPI, setRequestAPI] = useState()
//Request submited ID
  const [find, setFind] = useState('')
//Suggestions show on input
  const [suggestions, setSuggestions] = useState()
//Hidde and show suggestions 
  const [showSuggestions, setShowSuggestions] = useState({})
//Error on search value 
  const [error, setError] = useState(false)


//INITIAL REQUEST BY RANDOM ID 
  useEffect(() => {
    let randomID
    if(find == ''){
      randomID = (Math.floor( Math.random() * 126) + 1)
    }else{
      randomID = find
    }
       const URL = `https://rickandmortyapi.com/api/location/${randomID}`
       axios.get(URL)
            .then(res => {
              setRequestAPI(res.data)
              setError(false)
            })
            .catch(err => {
              setError(true)
            })
  }, [find])

  /* SEARCH BY SUBMITED ID */
  const submitedInfo = e => {
    e.preventDefault()
    setFind( e.target.text.value )
  }

  //HANDLE SUGGESTIONS IN SEARCH INPUT
  const handleChange = e => {

     if(e.target.value == ''){
       return setSuggestions()
     }

    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
      
    fetch(URL)
       .then(res => res.json())
       .then(data => setSuggestions(data.results))
       .catch(err => console.log(err))
  }  

//SHOW INPUT SUGGESITONS 
const showInputMenu = () => {setShowSuggestions({display: "flex"})}

  return (
    <div className="App">
      <div className='header_container'>
        <div className='image_container'></div>
        <h1>Rick and Morty Dimensions</h1>
         <form onSubmit={submitedInfo}>
            <input 
             id='text' type="text" autoComplete='off' 
             onChange={handleChange} 
             placeholder='Type a dimension ID'
             onClick={showInputMenu}
            />
           <button>Find</button>
           <FilterList
            suggestions={suggestions}
            setFind={setFind}
            setShowSuggestions={setShowSuggestions}
            showSuggestions={showSuggestions}
           />
         </form>
      </div>
      <Location 
       requestAPI={requestAPI} 
      /> 
      <div className='card_residents'>
        {
          error ? <Error/>
          :
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
