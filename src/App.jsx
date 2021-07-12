import AllHeader from "./AllHeader/AllHeader";
import styles from "./App.module.css";
import TopHeader from "./TopHeader/TopHeader";

const App = () => {
  return (
    <main>
      <header>
        <TopHeader />
        <AllHeader />
      </header>
    </main>
  );
};

export default App;
