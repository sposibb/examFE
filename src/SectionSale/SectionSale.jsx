import Countdown from "react-countdown";
import React from "react";
import styles from "./SectionSale.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const SectionSale = () => {
  return (
    <section className={styles.body}>
      <Container>
        <h2>
          Congratulations, you have a unique opportunity to use our service
          absolutely free
        </h2>
        <p className={styles.title}>You have</p>
        <div className={styles.wallpaper}>
          {" "}
          <Countdown date={Date.now() + 500000000}></Countdown>
        </div>

        <p className={styles.title}>Don't miss your chance</p>
        <p className={styles.title}>
          All you need to do is register successfully so don't hesitate
        </p>
        <Button className={styles.button} variant="success" size="lg">
          Register Now
        </Button>
      </Container>
    </section>
  );
};

export default SectionSale;
