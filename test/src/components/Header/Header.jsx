import React from 'react'
import logo from "../../../public/10.jpg"
import "./Header.css"
// import logo from "./public/10.jpg"

const Header = () => {
  return (
    <>
    
        <header>

            <div className="header-logo">

                <div className="logo">

                    <img src={logo} alt="logo" />

                </div>

            </div>

        </header>
    
    </>
  )
}

export default Header