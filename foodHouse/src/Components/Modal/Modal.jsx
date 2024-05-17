import React from 'react'
import ReactModal from 'react-modal'
import "./Modal.css"

const Modal = ({ modal, closeModal }) => {
  return (
    <>
    
        <ReactModal isOpen={modal} onRequestClose={closeModal}>

            <div className="ReactModal-header">

                <div className="ReactModal-close">

                    <i className="fa-solid fa-xmark" onClick={closeModal}></i>

                </div>

            </div>

        </ReactModal>
    
    </>
  )
}

export default Modal