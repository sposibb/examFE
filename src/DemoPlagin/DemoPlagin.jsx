import React from "react";
import { useState } from "react";
import styles from "./DemoPlagin.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DemoPlagin = (props) => {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState("");
  const [sum, setSum] = useState("");
  // const EnterPrice = price.value;
  // const EnterNumber = numberEnter.value;
  // const SumGift = (e) => {
  //   e.PreventDefault();
  //   const
  // };
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleChangeTwo(e) {
    setNumber(e.target.value);
    getSum();

    // setSum((value / number).toFixed(2));
  }
  function getSum() {
    setSum(value / number);
  }

  return (
    <section className={styles.wrapper}>
      <Container>
        {" "}
        <h2 className={styles.text}>We suggest you use the trial version</h2>
        <Row>
          <Col>
            <p className={styles.about}>
              Let's be honest, each of us knows which is the best, most
              desirable, coolest and most importantly what you want to get for
              your birthday, so think about how much this gift should cost, and
              enter the amount in this field
            </p>
            <div className={styles.wrapper}>
              <input
                id="price"
                placeholder="Enter the price "
                className={styles.enter}
                type="number"
                value={value}
                onChange={handleChange}
              />
            </div>{" "}
          </Col>
          <Col>
            <p className={styles.about}>
              If you are on our page, then you will definitely celebrate your
              birthday and know who you will invite, please enter the number of
              guests which you will invite so that we can make calculations for
              you
            </p>
            <div className={styles.wrapper}>
              <input
                id="numberEnter"
                placeholder="Enter the number"
                className={styles.enter}
                type="number"
                value={number}
                onChange={handleChangeTwo}
              />
            </div>
          </Col>
        </Row>
        <p className={styles.about}>
          So in this field, your friends will be able to find out how much you
          need to give to be the happiest birthday in the world
        </p>
        <div className={styles.wrapper}>
          <input
            id="  "
            className={styles.notenter}
            type="text"
            readOnly="readonly"
            value={sum}
          />
        </div>
      </Container>
    </section>
  );
};

export default DemoPlagin;
