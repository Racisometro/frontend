import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={classes.card}>
        <div className={classes['social-media']}>
          <h3 className={classes['social-media__title']}>Nossas Redes</h3>
          <div className={classes['social-media__images']}>
            <a href="#">
              <img
                src={process.env.PUBLIC_URL + '/assets/face-icon.svg'}
                alt="Facebook Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
