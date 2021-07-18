import styles from "./SectionInfo.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Animated } from "react-animated-css";

const SectionInfo = () => {
  return (
    <section>
      <Container>
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
          animationInDelay="2000"
        >
          <h2>What is a Birthday Service®</h2>
        </Animated>
        <div className={styles.text}>
          <Animated
            animationIn="bounceInRight"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay="2300"
          >
            <p className={styles.titles}>
              Welcome to our page If you have a birthday celebration in the near
              future, you have chosen the right link
            </p>
          </Animated>
          <Animated
            animationIn="rubberBand"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay="2500"
          >
            <p className={styles.title}>Why us?</p>
          </Animated>
        </div>
        <Animated
          animationIn="rubberBand"
          animationOut="fadeOut"
          isVisible={true}
          animationInDelay="3000"
        >
          <Row className={styles.last}>
            <Col>
              <img className={styles.img} src="./images/ico2.png" alt="king" />
              <h4 className={styles.kind}>First of its kind</h4>
              <p>
                The priority idea was developed and created by our team so
                everything is at the highest level
              </p>
            </Col>
            <Col>
              <img className={styles.img} src="./images/ico3.png" alt="free" />
              <h4 className={styles.free}>Free</h4>
              <p>
                The free trial lasts one month, after which you have a discount
                on the first subscription
              </p>
            </Col>
            <Col>
              <img className={styles.img} src="./images/ico4.png" alt="time" />
              <h4 className={styles.save}>Save time</h4>
              <p>
                Using it once you will understand how much time you have saved
                with us and you will be delighted
              </p>
            </Col>
            <Col>
              <img className={styles.img} src="./images/ico5.png" alt="save" />
              <h4 className={styles.nerves}>Saving nerves</h4>
              <p>
                Only with us you can not think about what is always, and use
                your free time to your advantage
              </p>
            </Col>
            <Col>
              <img
                className={styles.img}
                src="./images/ico6.png"
                alt="support"
              />
              <h4 className={styles.support}>24/7 Support</h4>
              <p>
                After account activation, you have a personal assistant who will
                help solve any problems
              </p>
            </Col>
          </Row>
        </Animated>
      </Container>
    </section>
  );
};

export default SectionInfo;
