import React from "react";

function SaleItems() {
  return (
    <div>
      {" "}
      <section className="on-sale">
        <div className="container">
          <div className="title-box">
            <h2>On Sale</h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="product-top">
                <img src="/images/frida12.png" alt="frida"/>

                <div className="overlay-right">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="See Item"
                  >
                    <i className="fa fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Like"
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
                <h3>Colorful Cushion cover</h3>
                <h5>$17.38</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-top">
                <img src="/images/frida14.png" alt="frida" />

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
                <h3>Frida Cookie Cutter</h3>
                <h5>$7.41</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-top">
                <img src="/images/frida17.png" alt="frida"/>

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
                <h3> Frida AirPod Case</h3>
                <h5>$10.51</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-top">
                <img src="/images/frida25.png" alt="frida"/>
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
                <h3>High Top Shoes</h3>
                <h5>$74.42</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SaleItems;
