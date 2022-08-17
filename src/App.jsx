import { Header } from './components/Header';
import styles from './App.module.scss';
import { Sidebar } from './components/Sidebar';

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Sidebar />
        <main>Posts</main>
      </div>
    </div>
  );
}
