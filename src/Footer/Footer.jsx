import styles from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <h2 className={styles.title}>Birthday Service®</h2>
        <form className={styles.form} action="#" method="post">
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Enter your Email..."
            required=""
          />
          <input className={styles.inputS} type="submit" value="Sign Up" />
        </form>{" "}
        <h4 className={styles.subtitle}>Search and tell about us </h4>
        <div className={styles.link}>
          <a className={styles.linked} href="https://www.facebook.com/">
            <img
              className={styles.img}
              src="./images/face.png"
              alt="Facebook"
            />
          </a>{" "}
          <a className={styles.linked} href="https://www.instagram.com/">
            <img className={styles.img} src="./images/insta.png" alt="insta" />
          </a>{" "}
          <a className={styles.linked} href="https://www.linkedin.com/">
            <img className={styles.img} src="./images/link.png" alt="link" />
          </a>{" "}
          <a className={styles.linked} href="https://twitter.com/">
            <img
              className={styles.img}
              src="./images/twitter.png"
              alt="twitter"
            />
          </a>{" "}
        </div>
      </Container>
      <div className={styles.wallpaper}>
        <Container>
          <p className={styles.lastText}>
            Copyrights © 2021 Sposib Group | Made with{" "}
            <span className={styles.heart}>♡</span> by Sposibb
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
