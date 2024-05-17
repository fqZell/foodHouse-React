import React, { useState } from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom"
import Modal from '../Modal/Modal'
import ReactModal from 'react-modal'

const Header = () => {

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
        document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setModal(false)
        document.body.style.overflow = "auto"
    }

  return (
    <>
    
        <header>

            <NavLink to="/">
                <div className="header-logo">

                    <h1 className="header-logo__first">food</h1>
                    <h1 className="header-logo__last">House</h1>

                </div>
            </NavLink>

            <nav>

                <ul className="header-nav">

                    <li className="header-nav__link">
                        Главная
                    </li>

                    <li className="header-nav__link">
                        Меню
                    </li>
                    <li className="header-nav__link">
                        Сервис
                    </li>
                    <li className="header-nav__link">
                        О нас
                    </li>

                </ul>

            </nav>

            <div className="header-icons">

                <i className="fa-solid fa-user"></i>

                <i className="fa-solid fa-basket-shopping" onClick={openModal}></i>

            </div>

        </header>

        <Modal closeModal={closeModal} modal={modal} />
    
    </>
  )
}

export default Header