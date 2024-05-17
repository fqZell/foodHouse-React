import React from 'react'
import "./Menu.css"

const Menu = ({ photo, name }) => {
  return (
    <>
    
        <div className="menu-card">

            <div className="menu-photo">
                <img src={photo} alt="menu" />
            </div>

            <div className="menu-name">    
                <h2>{name}</h2>
            </div>

        </div>
    
    </>
  )
}

export default Menu