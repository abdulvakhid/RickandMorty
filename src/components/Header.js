import React from 'react'
import {NavLink, Link} from "react-router-dom"

export const Header = () => {
  return (
    <header className='shadow'>
        <div className='container'>
        <div className='d-flex justify-content-between py-4 align-items-center '>
            <Link className='text-decoration-none fs-2 text-dark' to="/">Rick and Morty</Link>
            <nav>
                <ul className='d-flex list-unstyled gap-3 m-0'>
                    <li>
                        <NavLink className='text-dark fs-5 text-decoration-none' to={"/"}>Character</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-dark fs-5 text-decoration-none' to={"/location"}>Location</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-dark fs-5 text-decoration-none' to={"/episodes"}>Episodes</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </header>
  )
}
