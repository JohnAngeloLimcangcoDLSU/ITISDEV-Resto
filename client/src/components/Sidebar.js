import React from 'react'
import '../styles/Sidebar.css'
import { SidebarData_Manager } from './SidebarData_Manager'
import { SidebarData_StockController } from './SidebarData_StockController'
import {Link} from 'react-router-dom'
import clickIMG from '../assets/click-sidebar.png'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className='sidebarList'>
        {SidebarData_Manager.map((val, key) => {
          return (
            <li key={key}
                className='sidebarRow'
                id = {window.location.pathname == val.path ? "active" : ""}
                onClick={ () => {window.location.pathname = val.path}}>
                  <div id='head'>{val.titlehead}</div>
                  <div id='icon'>{val.icon}</div>
                  <div id='title'>{val.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar