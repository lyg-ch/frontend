import React from "react";
import { Card } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

function SimilarProduct({ _id, name, price, pictures }) {
  return (
    <LinkContainer
      to={`/product/${_id}`}
      style={{ cursor: "pointer", width: "13rem", margin: "10px" }}
    >
      <Card style={{ width: "20rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          className="product-preview-img"
          src={pictures[0].url}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Subtitle>{name}</Card.Subtitle>
          <Card.Text>$ {price}</Card.Text>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default SimilarProduct;
