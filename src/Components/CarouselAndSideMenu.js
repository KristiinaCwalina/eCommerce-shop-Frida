import React from 'react';

function CarouselAndSideMenu (){
    return <div><section className="header">
    <div className="side-menu" id="side-menu">
      <ul>
        <li>On Sale</li>
        <li>Clothing</li>
        <li>Accessories</li>
        <li>Home and Living</li>
        <li>Stationery</li>
        <li>Books and Notebooks</li>
        <li>Art and Collectibles</li>
        <li>Electronics</li>
        <li>Jewelry</li>
        <li>Bags and Purses</li>
        <li>Bath and Beauty</li>
        <li>Weddings</li>
        <li>Toys and Games</li>
        <li>Shoes</li>
        <li>Pet Supplies</li>
      </ul>
    </div>

    <div className="slider">
      <div
        id="slider"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/frida10.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/frida9.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/frida5.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/frida15.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <ol className="carousel-indicators">
          <li
            data-target="#slider"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#slider" data-slide-to="1"></li>
          <li data-target="#slider" data-slide-to="2"></li>
          <li data-target="#slider" data-slide-to="3"></li>
        </ol>
      </div>
    </div>
  </section></div>
}



export default CarouselAndSideMenu;