import AllHeader from "./AllHeader/AllHeader";
import styles from "./App.module.css";
import TopHeader from "./TopHeader/TopHeader";
import SectionInfo from "./SectionInfo/SectionInfo";

const App = () => {
  return (
    <main className={styles.main}>
      <TopHeader />
      <header>
        <AllHeader />
      </header>
      <SectionInfo />
    </main>
  );
};

export default App;
