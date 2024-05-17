import React from 'react'
import Banner from '../Components/Banner/Banner'
import Menu from '../Components/Menu/Menu'
import { menus } from '../data'

const HomePage = () => {
  return (
    <>
    
      <Banner />

      <div className="menu-wrapper">

          <div className="menu-title">

            <h1>Наше Меню</h1>
            <hr></hr>

          </div>

          <div className="menus">

            {
              menus.map((menu, index) => (
                <Menu key={index} {...menu} />
              ))
            }

          </div>

      </div>

    </>
  )
}

export default HomePage