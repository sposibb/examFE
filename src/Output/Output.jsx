import styles from "./Output.module.css";
import SetSum from "../EnterInput/EnterInput";

const OutSum = (props) => {
  const { value } = props;

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.enter}
        type="text"
        readOnly="readonly"
        value={value}
      />
      <div className={styles.currency}>
        <div className={styles.iconWr}>
          <span className={styles.start}>$</span>
          <span className={styles.icon}></span>
        </div>
        <div>
          <ul className={styles.currencyList}>
            <li className={styles.uahItem}>₴</li>
            <li className={styles.usdItem}>$</li>
            <li className={styles.eurItem}>€</li>
            <li className={styles.zlItem}>zł</li>
            <li className={styles.poundItem}>£</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OutSum;
