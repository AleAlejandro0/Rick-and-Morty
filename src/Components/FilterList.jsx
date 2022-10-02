import React from 'react'

const FilterList = ({suggestions, setFind, setShowSuggestions, showSuggestions}) => {

  const handleClick = id => {
    setFind(id)
    setShowSuggestions({display: "none"})
  }
  
  return (
    <div className='filter__container' style={showSuggestions}>
     <ul className='filter__ul show'>
      {
        suggestions?.map(suggestion => (
           <li className='filter__li' onClick={() => handleClick(suggestion.id) } key={suggestion.id}> {suggestion.name}</li>
         ))
      }
     </ul>
    </div>
  )
}

export default FilterList