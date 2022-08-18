import styles from './Header.module.scss';
import igniteLogo from '../../assets/Ignite-logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt='Logo do Ignite' />
      <strong>Ignite Feed</strong>
    </header>
  );
};
