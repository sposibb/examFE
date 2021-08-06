import Carousel from "react-bootstrap/Carousel";
import styles from "./AllHeader.module.css";

const AllHeader = () => {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item className={styles.carousel}>
        <img className={styles.img} src="./images/hb5.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3 className={styles.shadow}>Our satisfied customers</h3>
          <p className={styles.shadow}>The celebration took place in USA</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel}>
        <img
          className={styles.img}
          src="./images/hb1.jpeg  "
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={styles.shadow}>Our satisfied customers</h3>
          <p className={styles.shadow}>The celebration took place in Hungary</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel}>
        <img className={styles.img} src="./images/hb8.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3 className={styles.shadow}>Our satisfied customers</h3>
          <p className={styles.shadow}>The celebration took place in Moldova</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel}>
        <img className={styles.img} src="./images/hb6.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3 className={styles.shadow}>Our satisfied customers</h3>
          <p className={styles.shadow}>
            The celebration took place in Lithuania
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel}>
        <img className={styles.img} src="./images/hb7.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3 className={styles.shadow}>Our satisfied customers</h3>
          <p className={styles.shadow}>The celebration took place in Latvia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carousel}>
        <img className={styles.img} src="./images/hb4.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3 className={styles.shadow}>Our satisfied customers</h3>
          <p className={styles.shadow}>The celebration took place in Ukraine</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AllHeader;
