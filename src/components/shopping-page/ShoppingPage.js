import React from "react";
import HeadingSection from "../HeadingSection";
import "./shoppingpagestyle.css";

const ShoppingPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <HeadingSection heading="Shopping Cart" />
        <div className="shopping_cart">
          <div class="category_bar">
            <div className="category_bar-heading">
              <span>PRODUCT DETAILS</span>
            </div>
            <div className="category_bar-quantity">
              <span>QUANTITY</span>
            </div>
            <div className="category_bar-price">
              <span>PRICE</span>
            </div>
          </div>
          <div className="shopping_cart-items">
           {/* ORDER ITEM START */}
            <div className="ordered_item">
              <div className="ordered_image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0250/0322/9287/products/cariuma-central-pte-ltd-footwear-oca-low-pantone-snow-white-canvas-contrast-thread-sneaker-men-design-milk-shop-15700990820455_2000x.jpg"
                  alt="product image"
                />
              </div>
              <div className="ordered_detail">
                <h2 className="order_title">REEBOK AZTREK 96</h2>
                <span className="order_category">Men's Shoes</span>
                <span className="order_size">Size: 41</span>
                <span className="order_color">Color: White</span>
                <a className="order_edit" href="#">
                  EDIT
                </a>
              </div>
              <div className="ordered_quantity-price">
                <div className="order_quantity">
                  <button className="order_quantity-sum">-</button>
                  <input className="order_quantity-sum" type="number" />
                  <button className="order_quantity-sum">+</button>
                </div>
                <div className="order_price">
                  <span>USD 120.95</span>
                </div>
                <div className="order_delete">
                  <span>
                    <i class="fa fa-trash-o"></i>
                  </span>
                </div>
              </div>
            </div>
            {/* ORDER ITEM END */}

            {/* ORDER ITEM START */}
            <div className="ordered_item">
              <div className="ordered_image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="product image"
                />
              </div>
              <div className="ordered_detail">
                <h2 className="order_title">REEBOK AZTREK 96</h2>
                <span className="order_category">Men's Shoes</span>
                <span className="order_size">Size: 41</span>
                <span className="order_color">Color: White</span>
                <a className="order_edit" href="#">
                  EDIT
                </a>
              </div>
              <div className="ordered_quantity-price">
                <div className="order_quantity">
                  <button className="order_quantity-sum">-</button>
                  <input className="order_quantity-sum" type="number" />
                  <button className="order_quantity-sum">+</button>
                </div>
                <div className="order_price">
                  <span>USD 120.95</span>
                </div>
                <div className="order_delete">
                  <span>
                    <i class="fa fa-trash-o"></i>
                  </span>
                </div>
              </div>
            </div>
            {/* ORDER ITEM END */}

          </div>
        </div>
        <div className="shopping_checkout"></div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingPage;
