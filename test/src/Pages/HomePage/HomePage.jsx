import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'

const HomePage = () => {

    useEffect(() => {

        document.title = "react 7/22"

    }, [])

  return (
    <>
      <Header />
      HomePage
    </>
  )
}

export default HomePage