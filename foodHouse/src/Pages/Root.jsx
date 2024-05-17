import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Header from '../Components/Header/Header'

const Root = () => {

    useEffect(() => {

        document.title = "Food House"

    }, [])

  return (
    <>
        <div className="container">

          <Header />

          <Outlet />

        </div>
    
    </>
  )
}

export default Root