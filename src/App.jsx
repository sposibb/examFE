import styles from "./App.module.css";
import SetSum from "./EnterInput/EnterInput";
import OutSum from "./Output/Output";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.hello}>
      <h2 className={styles.title}>MoneyConvert® 2.0 beta</h2>
      <SetSum
        className={styles.setSum}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <OutSum className={styles.outSum} value={(value / 27.3).toFixed(2)} />
    </div>
  );
};

export default App;
