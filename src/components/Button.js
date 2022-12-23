import React from 'react'

export const Button = ({text, index,name,setState}) => {
  return (
    <div>
        <input onClick={() => setState(text) } type="radio" className="btn-check" id={`${name}-${index}`} name={name} autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>{text}</label>
    </div>
  )
}
