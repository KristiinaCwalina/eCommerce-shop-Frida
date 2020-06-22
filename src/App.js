import React from 'react';
import './App.css';

function App() {
  const openmenu = ()=>{
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("menu-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
  }
  const closemenu = ()=> {
    document.getElementById("side-menu").style.display = "none";
    document.getElementById("menu-btn").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
  }
  return (
    <div>
    <div className="top-nav-bar">
    <div className="search-box">
      <i className="fa fa-bars" id="menu-btn" onClick={openmenu}></i>
      <i className="fa fa-times" id="close-btn" onClick={closemenu}></i>
      <h3 className="site-name">FRIDA</h3>
      <input type="text" className="form-control" />
      <span className="input-group-text"><i className="fa fa-search"></i></span>
    </div>
    <div className="menu-bar">
      <ul>
        <li>
          <a href="#"><i className="fa fa-shopping-cart"></i>Cart</a>
        </li>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Log In</a></li>
      </ul>
    </div>
  </div>
 
  <section className="header">
    <div className="side-menu" id="side-menu">
      <ul>
        <li>
          On Sale<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -1</li>
            <li>Sub Menu -1</li>
            <li>Sub Menu -1</li>
            <li>Sub Menu -1</li>
          </ul>
        </li>
        <li>
          Clothing<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Accessories<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -3</li>
            <li>Sub Menu -3</li>
            <li>Sub Menu -3</li>
            <li>Sub Menu -3</li>
          </ul>
        </li>
        <li>
          Home and Living<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Stationery<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Books, Films and Music<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Art and Collectibles<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Electronics<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Jewelry<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Bags and Purses<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Bath and Beauty<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Weddings<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Toys and Games<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Shoes<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
        <li>
          Pet Supplies<i className="fa fa-angle-right"></i>
          <ul>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
            <li>Sub Menu -2</li>
          </ul>
        </li>
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
            <img src="/images/frida5.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/frida2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/frida3.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/frida4.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#slider" data-slide-to="0" className="active"></li>
          <li data-target="#slider" data-slide-to="1"></li>
          <li data-target="#slider" data-slide-to="2"></li>
          <li data-target="#slider" data-slide-to="3"></li>
        </ol>
      </div>
    </div>
  </section>
  
  <section className="featured-categories">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src="/images/frida1.png" />
        </div>
        <div className="col-md-4">
          <img src="/images/frida6.png" />
        </div>
        <div className="col-md-4">
          <img src="/images/frida3.png" />
        </div>
      </div>
    </div>
  </section>
  <section className="on-sale">
    <div className="container">
      <div className="title-box">
        <h2>On Sale</h2>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="product-top">
            <img src="/images/frida3.png" />
            <div className="overlay-right">
              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Wishlist"
              >
                <i className="fa fa-heart-o"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div className="product-bottom text-center">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <h3>iPhone Case</h3>
            <h5>$19.00</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-top">
            <img src="/images/frida4.png" />
            <div className="overlay-right">
              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Wishlist"
              >
                <i className="fa fa-heart-o"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div className="product-bottom text-center">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <h3>T-shirt</h3>
            <h5>$25.00</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-top">
            <img src="/images/frida1.png" />
            <div className="overlay-right">
              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Wishlist"
              >
                <i className="fa fa-heart-o"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div className="product-bottom text-center">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <h3>Agenda 2020</h3>
            <h5>$35.00</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-top">
            <img src="/images/frida2.png" />
            <div className="overlay-right">
              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Wishlist"
              >
                <i className="fa fa-heart-o"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div className="product-bottom text-center">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <h3>Socks</h3>
            <h5>$11.00</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="new-products">
    <div className="container">
      <div className="title-box">
        <h2>New Arrivals</h2>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="product-top">
            <img src="/images/frida3.png" />
            <div className="overlay-right">
              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Wishlist"
              >
                <i className="fa fa-heart-o"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div className="product-bottom text-center">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <h3>iPhone Case</h3>
            <h5>$19.00</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-top">
            <img src="/images/frida4.png" />
            <div className="overlay-right">
              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Wishlist"
              >
                <i className="fa fa-heart-o"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div className="product-bottom text-center">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <h3>T-shirt</h3>
            <h5>$25.00</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-top">
            <img src="/images/frida1.png" />
            <div className="overlay-right">
              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Wishlist"
              >
                <i className="fa fa-heart-o"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div className="product-bottom text-center">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <h3>Agenda 2020</h3>
            <h5>$35.00</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="product-top">
            <img src="/images/frida2.png" />
            <div className="overlay-right">
              <button
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
              >
                <i className="fa fa-eye"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Wishlist"
              >
                <i className="fa fa-heart-o"></i>
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div className="product-bottom text-center">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <h3>Socks</h3>
            <h5>$11.00</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="website-features">
    <div className="container">
      <div className="row">
        <div className="col-md-3 feature-box">
          <img src="/images/frida3.png" />
          <div className="feature-text">
            <p><b>100% original</b> items available</p>
          </div>
        </div>
        <div className="col-md-3 feature-box">
          <img src="/images/frida4.png" />
          <div className="feature-text">
            <p><b>Returns</b> within 30 days.</p>
          </div>
        </div>
        <div className="col-md-3 feature-box">
          <img src="/images/frida1.png" />
          <div className="feature-text">
            <p><b>Free delivery</b> on orders over $30.</p>
          </div>
        </div>
        <div className="col-md-3 feature-box">
          <img src="/images/frida2.png" />
          <div className="feature-text">
            <p><b>Pay online</b> with PayPal.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="footer">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-4">
          <h1>Useful Links</h1>
          <p>Terms of Use</p>
          <p>Return Policy</p>
        </div>
        <div className="col-md-3">
          <h1>Company</h1>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="col-md-3">
          <h1>Follow Us</h1>
          <p><i class = "fa fa-instagram"></i>Instagram</p>
          <p><i class = "fa fa-pinterest"></i>Pinterest</p>
        </div>
      </div>
        <hr/>
        <p class = "copyright">Made with <i class = "fa fa-heart"></i> in BCN 2020</p>
      
      
    </div>
  </section>
  </div>
  );
}

export default App;
