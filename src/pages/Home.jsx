import React, { useState, useEffect } from "react";
import Helmet from "../component/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../component/UI/ProductList";
import products from "../assets/data/products";
import counterimg from "../assets/images/counter-timer-img.png"

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestsales, setBestsales] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => (item.category == "chair")
    );
    const filteredBestsalseProducts = products.filter(
      (item) => (item.category == "sofa")
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestsales(filteredBestsalseProducts)
  }, []);
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
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="shop">Shop Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
        <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestsales} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='6'>
            </Col>
            <Col lg='6' md='6' className="text-end">
              <img src={counterimg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
