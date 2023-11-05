import React from "react";
import Helmet from "../component/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Tranding Product In {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores facilis animi fugit aut quasi quam deleniti nesciunt
                  quas architecto dolor?
                </p>
                <button className="buy__btn">Shop Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
