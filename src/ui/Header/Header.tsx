import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__main}>
        <img
          className={classes.logo}
          src={process.env.PUBLIC_URL + '/assets/logo.svg'}
          alt="Racismômetro"
        />
      </div>
    </header>
  );
};

export default Header;
