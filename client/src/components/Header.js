import React from 'react'
import '../styles/Header.css'
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  return (
    <div className='header'>
        <div className='headerTitle'>
            <h1>Resto</h1>
        </div>
        <div className='headerUser'>
            <h2>Manager</h2>
            <PersonIcon />
        </div>
    </div>
  )
}

export default Header