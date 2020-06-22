import React from "react";
import "./App.css";

function App() {
  const openmenu = () => {
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("menu-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
  };
  const closemenu = () => {
    document.getElementById("side-menu").style.display = "none";
    document.getElementById("menu-btn").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
  };
  return (
    <div>
      <div className="top-nav-bar">
        <div className="search-box">
          <i className="fa fa-bars" id="menu-btn" onClick={openmenu}></i>
          <i className="fa fa-times" id="close-btn" onClick={closemenu}></i>
          <h3 className="site-name">FRIDA</h3>
          <input type="text" className="form-control" />
          <span className="input-group-text">
            <i className="fa fa-search"></i>
          </span>
        </div>
        <div className="menu-bar">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-shopping-cart"></i>Cart
              </a>
            </li>

            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
        </div>
      </div>

      <section className="header">
        <div className="side-menu" id="side-menu">
          <ul>
            <li>On Sale</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Home and Living</li>
            <li>Stationery</li>
            <li>Books, Films and Music</li>
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
                  src="/images/frida4.png"
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
                <img src="/images/frida12.png" />
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
                <h3>Colorful Cushion cover</h3>
                <h5>$17.38</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-top">
                <img src="/images/frida11.png" />
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
                <h3>Frida Kahlo Doll</h3>
                <h5>$54.88</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-top">
                <img src="/images/frida13.png" />
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
                <h3>Frida Kahlo Fabric</h3>
                <h5>$4.16</h5>
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
                <img src="/images/frida7.png" />
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
                <h3>Bronze Earrings</h3>
                <h5>$13.90</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-top">
                <img src="/images/frida8.png" />
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
                <h3>Frida Hoodie</h3>
                <h5>$23.67</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-top">
                <img src="/images/frida9.png" />
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
                <h3>Frida Mexico T-shirt</h3>
                <h5>$14.75</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-top">
                <img src="/images/frida10.png" />
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
                <h3>Frida Kahlo Keyring</h3>
                <h5>$6.89</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="container text-center">
          <div className="row"></div>
          <p class="copyright">
            Made with <i class="fa fa-heart"></i> in BCN 2020
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
