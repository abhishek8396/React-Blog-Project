import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Component.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'><h4>Home</h4></NavLink>
          </li>
          <li>
            <NavLink to='/Bollywood'><h4>Bollywood</h4></NavLink>
          </li>
          <li>
            <NavLink to='/Technology'><h4>Technology</h4></NavLink>
          </li>
          <li>
            <NavLink to='/Hollywood'><h4>Hollywood</h4></NavLink>
          </li>
          <li>
            <NavLink to='/Fitness'><h4>Fitness</h4></NavLink>
          </li>
          <li>
            <NavLink to='Food'><h4>Food</h4></NavLink>
          </li>
        </ul>
      </nav><hr/>
      <Outlet/>
    </div>
  )
}

export default Navbar
