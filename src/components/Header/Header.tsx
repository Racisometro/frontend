import classes from './Header.module.css';

const Header = () => {
  const srcUrl = `${process.env.PUBLIC_URL}/assets/logo.svg`;
  return (
    <header className={classes.header}>
      <div className={classes.header__main}>
        <img className={classes.logo} src={srcUrl} alt="Racismômetro" />
      </div>
    </header>
  );
};

export default Header;
