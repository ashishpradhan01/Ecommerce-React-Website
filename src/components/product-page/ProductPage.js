import React from "react";
import HeadingSection from "../HeadingSection";
import "./productpagestyle.css";

const ProductPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <HeadingSection heading="Men's Shoes"/>
        <section className="product_cart">
          <div className="quick_image">
            <div>
              <img
                src="https://cdn.luxe.digital/media/2021/06/18093702/most-comfortable-men-sneakers-adidas-ultraboost-21-review-luxe-digital%402x.jpg"
                alt="product quick image1"
              />
            </div>
            <div>
              <img
                src="https://cdn.luxe.digital/media/2021/06/18093702/most-comfortable-men-sneakers-adidas-ultraboost-21-review-luxe-digital%402x.jpg"
                alt="product quick image2"
              />
            </div>
            <div>
              <img
                src="https://cdn.luxe.digital/media/2021/06/18093702/most-comfortable-men-sneakers-adidas-ultraboost-21-review-luxe-digital%402x.jpg"
                alt="product quick image3"
              />
            </div>
            <div>
              <img
                src="https://cdn.luxe.digital/media/2021/06/18093702/most-comfortable-men-sneakers-adidas-ultraboost-21-review-luxe-digital%402x.jpg"
                alt="product quick image4"
              />
            </div>
          </div>
          <div className="product_image">
            <img
              src="https://cdn.shopify.com/s/files/1/0250/0322/9287/products/cariuma-central-pte-ltd-footwear-oca-low-pantone-snow-white-canvas-contrast-thread-sneaker-men-design-milk-shop-15700990820455_2000x.jpg"
              alt="actual product image"
            />
          </div>
          <div className="product_short_info">
            <div className="product_rating">
              <span className="fa fa-star product_rating-checked"></span>
              <span className="fa fa-star product_rating-checked"></span>
              <span className="fa fa-star product_rating-checked"></span>
              <span className="fa fa-star product_rating-checked"></span>
              <span className="fa fa-star product_rating-unchecked"></span>
              <span>(7)</span>
            </div>
            <div className="product_title">
              <span>REEBOK AZTREK 96</span>
            </div>
            <div className="product_type">
              <span>Men's Classic</span>
            </div>
            <div className="product_price">
              <span>$120.95</span>
              <span>+ Free delivery</span>
            </div>
            <div className="product_color">
              <span className="option_title">COLORS</span>
              <div className="product_color-options">
                <div>
                  <img
                    src="https://cdn.luxe.digital/media/2021/06/18093702/most-comfortable-men-sneakers-adidas-ultraboost-21-review-luxe-digital%402x.jpg"
                    alt="product quick image1"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.luxe.digital/media/2021/06/18093702/most-comfortable-men-sneakers-adidas-ultraboost-21-review-luxe-digital%402x.jpg"
                    alt="product quick image2"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.luxe.digital/media/2021/06/18093702/most-comfortable-men-sneakers-adidas-ultraboost-21-review-luxe-digital%402x.jpg"
                    alt="product quick image3"
                  />
                </div>
              </div>
            </div>
            <div className="product_size">
              <span className="option_title">SIZE</span>
              <div className="product_size-options">
                <select className="selection">
                  <option value="select-size">SELECT SIZE</option>
                  <option value="select-size">SELECT SIZE</option>
                  <option value="select-size">SELECT SIZE</option>
                </select>

                <select className="size">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="product_add_to_cart">
              <button className="add_to_cart_button">ADD TO CART</button>
              <button className="fav_button">
                <i className="fa fa-heart fa_custom "></i>
              </button>
            </div>
            <div className="product_return">
              <i class="fa fa-check"></i>
              <span>Free shipping and the returns</span>
            </div>
          </div>
        </section>
        <section className="product_details">
          <h1 className="product_details-heading">PRODUCT DETAILS</h1>
          <div className="product_specs">
            <div className="product_details-button">
              <div className="product-description_heading">
                <span>DESCRIPTION</span>
              </div>
              <div className="product-specification_heading">
                <span>SPECIFICATION</span>
              </div>
            </div>
            <div className="product_detials-data">
              <div className="product-description">
                <h2>REEBOK AZTREK 96</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English. It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
              <div className="product-description_image">
                <img src="https://cdn.shopify.com/s/files/1/0250/0322/9287/products/cariuma-central-pte-ltd-footwear-oca-low-pantone-snow-white-canvas-contrast-thread-sneaker-men-design-milk-shop-15700990820455_2000x.jpg" alt="product image"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ProductPage;
