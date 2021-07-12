import styles from "./EnterInput.module.css";
// import styles from "../object";

const SetSum = (props) => {
  const { value, onChange } = props;

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.enter}
        type="number"
        value={value}
        onChange={onChange}
      />
      <div className={styles.currency}>
        <div className={styles.iconWr}>
          <span className={styles.start}>₴</span>
          <span className={styles.icon}></span>
        </div>
        <div>
          <ul className={styles.currencyList}>
            <li className={styles.uahItem} id={"uah"}>
              ₴
            </li>
            <li className={styles.usdItem} id={"usd"}>
              $
            </li>
            <li className={styles.eurItem} id={"eur"}>
              €
            </li>
            <li className={styles.zlItem} id={"zl"}>
              zł
            </li>
            <li className={styles.poundItem} id={"gbp"}>
              £
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SetSum;
