import React from "react";
import Footer from "../Footer/Footer";
const products = require("./products.json");

export default class allProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products.Products,
    };
  }

  render() {
    return (
      <>
        <div id="heroprod">
          <img
            className="prodhero"
            src="https://images.unsplash.com/photo-1465256410760-10640339c72c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="Oaxaca wallpaper"
          />

          <p className="herotext">From our hands to your door</p>
        </div>
        {this.state.products.map((product, index) => (
          <div className="productpg">
            {/* // style="width:100%;" */}
            <img src={product.image} alt={product.title} />
            <h4>{product.title} </h4>
            <p> {product.price}</p>
            <p> {product.description} </p>{" "}
            <p>
              <button>Add to Cart</button>{" "}
            </p>{" "}
          </div>
        ))}
        <div>
          <Footer />;
        </div>
      </>
    );
  }
}
