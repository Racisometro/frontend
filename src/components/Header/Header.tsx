import styles from './Header.module.css';

const Header = () => {
  const srcUrl = `${process.env.PUBLIC_URL}/assets/logo.svg`;
  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <img className={styles.logo} src={srcUrl} alt="Racismômetro" />
      </div>
    </header>
  );
};

export default Header;
