import React from 'react'
import banner from "../../../public/img/banner/banner.jpg"
import "./Banner.css"

const Banner = () => {
  return (
    <>
    
        <div className="banner-wrapper">

            <div className="banner-content">

                <p className="banner-orange">
                    Экспресс-доставка от Яндекс.Еды
                </p>

                <h1 className="banner-title">

                    Быстро<br></br>и вкусно<span>.</span>

                </h1>

                <p className="banner-subtitle">
                    Сеть быстрого питания #1 в Казани
                </p>

                <div className="banner-wrapper__button">

                    <button className="banner-btn">
                        Сделать заказ
                    </button>

                    <p className="banner-text">
                        бесплатная доставка<br></br>от 500 рублей
                    </p>

                </div>

            </div>

            <div className="banner-img">
                <img src={banner} alt="banner" />
            </div>

        </div>
    
    </>
  )
}

export default Banner