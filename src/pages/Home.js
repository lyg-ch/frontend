import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  return (
    <div>
      <div className="home-banner">
        <img src={require("../img/banner_top.gif")} />
      </div>
      <div className="featured-products-container container mt-4">
        <h2>Last products</h2>
        {/* last products here */}
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            <h4
              style={{ fontSize: "18px", color: "black", marginBottom: "15px" }}
            >
              See more <i className="fas fa-arrow-right-long"></i>
            </h4>
          </Link>
        </div>
      </div>
      {/* second-banner */}
      <div className="sale">
        <LinkContainer to="/category/all">
          <div className="sale">
            <div className="sale-text">
              <h1>Colour Is The New Neutral</h1>
              <p>
                Our latest shades are soft, versatile, and make styling easy
              </p>
              <Link
                to="/category/all"
                style={{
                  display: "inline",
                  textDecoration: "none",
                }}
              >
                <Button variant="outline-light my-4" size="md">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </LinkContainer>
      </div>
      <div className="recent-products-container container my-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={4}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
