import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";

const ProductDetails = ({ products }) => {
  const { productid } = useParams();
  const [foundProduct, setFoundProduct] = useState(null);

  useEffect(() => {
    const product = products.find((product) => product.id == productid);
    setFoundProduct(product);
  }, [products, productid]);

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image
            src={foundProduct ? foundProduct.thumbnail : ""}
            alt="Product Image"
            fluid
          />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">
                {foundProduct ? foundProduct.title : ""}
              </Card.Title>
              <Card.Text className="mb-3">
                {foundProduct ? foundProduct.description : ""}
              </Card.Text>
              <Card.Text className="mb-3">
                Fiyat: {foundProduct ? foundProduct.price : 0} TL
              </Card.Text>
              <Button variant="primary">Sepete Ekle</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.productList.products,
});

export default connect(mapStateToProps)(ProductDetails);
