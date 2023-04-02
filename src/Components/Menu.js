import React from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {

    const navigate = useNavigate()

  return (
    <div>
        <ul className='menu'>
            <li> <a href='#/'  onClick={() => navigate(-1)}>Back</a> </li>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/about'>About</Link> </li>
            <li> <Link to='/users'>Users</Link> </li>
            <li> <a href='#/' onClick={() => navigate('/contact')}>Contact</a> </li>
            <li> <Link to='auth'>Auth</Link> </li>

         </ul>
         <hr/>

    </div>
  )
}

export default Menu