import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.app__header}>
        <img src={logo} className={styles.app__logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.app__link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
