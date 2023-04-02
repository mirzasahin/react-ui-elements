import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Menu from '../../Components/Menu'
import './styles.css'

const AuthLayout = () => {
  return (
    <div>
      <Menu/>
        
      <div className='auth-container'>
        <div className='auth-menu'>
          <Link to="/auth">Giriş yap</Link>
          <Link to="/auth/register">Kayıt Ol</Link>
        </div>

        <Outlet/> {/* Alttaki child'lara erişim sağlamak için.. */}

      </div>

    </div>
  )
}

export default AuthLayout