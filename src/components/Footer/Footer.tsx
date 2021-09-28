import Card from '../../ui/Card/Card';
import classes from './Footer.module.css';

const Footer = () => {
  const facebookSrc = process.env.PUBLIC_URL + '/assets/face-icon.svg';
  const instagramSrc = process.env.PUBLIC_URL + '/assets/insta-icon.svg';
  const twitterSrc = process.env.PUBLIC_URL + '/assets/twitter-icon.svg';
  const twSrc = process.env.PUBLIC_URL + '/assets/tw-logo.svg';
  return (
    <footer>
      <Card>
        <div className={classes.container}>
          <div className={classes['content']}>
            <h3 className={classes['content__title']}>Nossas redes:</h3>
            <div className={classes['content__images']}>
              <a href="#">
                <img src={facebookSrc} alt="Facebook Logo" />
              </a>
              <a href="#">
                <img src={twitterSrc} alt="Twitter Logo" />
              </a>
              <a href="#">
                <img src={instagramSrc} alt="Instagram Logo" />
              </a>
            </div>
          </div>

          <hr />

          <div className={classes['content']}>
            <h3 className={classes['content__title']}>Apoio:</h3>
            <div className={classes['content__images']}>
              <a href="#">
                <img src={twSrc} alt="Thoughtworks Logo" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
