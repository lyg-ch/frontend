import React from "react";
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ProductPreview({ _id, name, pictures, price }) {
  return (
    <LinkContainer
      to={`/product/${_id}`}
      style={{ cursor: "pointer", width: "15rem", margin: "10px" }}
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
          <Button variant="outline-dark">Add to Cart</Button>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default ProductPreview;
