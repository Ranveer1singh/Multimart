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
import counterimg from "../assets/images/counter-timer-img.png";
import Clock from "../component/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestsales, setBestsales] = useState([]);
  // const[bed,setBed] = useState([])
  // const[table,setTable] = useState([])
  const [mobileProduct, setMobileProducts] = useState([]);
  const[wirelessProduct, setWirelessProducts] = useState([]);
  const[popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category == "chair"
    );
    const filteredBestsalseProducts = products.filter(
      (item) => item.category == "sofa"
    );
    // const filteredBedProducts = products.filter(
    //   (item) => item.category == "bed"
    // );
    // const filteredTableProducts = products.filter(
    //   (item) => item.category == "table"
    // );
    const filteredMobileProducts = products.filter(
      (item) => item.category == "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category == "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category == "watch"
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestsales(filteredBestsalseProducts);
    // setBed(filteredBedProducts);
    // setTable(filteredTableProducts);
    setWirelessProducts(filteredWirelessProducts);
    setMobileProducts(filteredMobileProducts);
    setPopularProducts(filteredPopularProducts);
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
            <Col lg="6" md="12">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>

              </div>
              <Clock />
              <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn"><Link to="/shop">Visit Store</Link></motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterimg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
          <Col lg="12" className="text-center mb-6">
              <h2 className="section__title mb-5">New Arrivals</h2>
            </Col>
            {/* <ProductList data={bed} /> */}
            <ProductList data={mobileProduct} />
            <ProductList data={wirelessProduct} />
          </Row>
        </Container>
      </section>
      <section className="popular__categories">
      <Container>
          <Row>
          <Col lg="12" className="text-center mb-5">
              <h2 className="section__title mb-4">Popular Categories</h2>
            </Col>
            {/* <ProductList data={table} /> */}
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
