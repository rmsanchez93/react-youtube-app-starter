import React from 'react'

const SearchBar = (props) => {
    return(
        <div>
           <input type='text' placeholder='type some stuff here'onChange={(e)=> props.handleChange(e.target.value)}/>
        </div>
    )
}

export default SearchBar;