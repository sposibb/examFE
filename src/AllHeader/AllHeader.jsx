import Carousel from "react-bootstrap/Carousel";
import styles from "./AllHeader.module.css";

const AllHeader = () => {
  return (
    <Carousel fade>
      <Carousel.Item className={styles.carousel}>
        <img
          className="d-block w-100"
          src="./images/hb8.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Our satisfied customers</h3>
          <p>The celebration took place in USA</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel}>
        <img
          className="d-block w-100"
          src="./images/hb1.jpeg  "
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Our satisfied customers</h3>
          <p>The celebration took place in Hungary</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel}>
        <img
          className="d-block w-100"
          src="./images/hb5.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Our satisfied customers</h3>
          <p>The celebration took place in Moldova</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel}>
        <img
          className="d-block w-100"
          src="./images/hb6.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Our satisfied customers</h3>
          <p>The celebration took place in Lithuania</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel}>
        <img
          className="d-block w-100"
          src="./images/hb7.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Our satisfied customers</h3>
          <p>The celebration took place in Latvia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel}>
        <img
          className="d-block w-100"
          src="./images/hb4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Our satisfied customers</h3>
          <p>The celebration took place in Ukraine</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AllHeader;
