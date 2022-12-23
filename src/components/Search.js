import React from 'react'

export const Search = ({setSearch, setActivePage}) => {
  return (
   <form onSubmit={(evt) => {
   setActivePage(1);
    evt.preventDefault()
   }}>
    <input onChange={(evt) => setSearch(evt.target.value)}
     className='form-control w-50 mx-auto mb-5 rounded-4' type="Search" placeholder='Search...'/>
   </form>
  )
}
