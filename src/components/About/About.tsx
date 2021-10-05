import React from 'react';
import Card from '../../ui/Card/Card';
import { FiInfo } from 'react-icons/fi';
import styles from './About.module.css'

const About: React.FC = (props) => {
  return (
    <div className={styles.about} data-testid="about-component">
      <Card>
        <div className={styles['about-header']}>
          <FiInfo className={styles['about-header__icon']} />
          <h3 className={styles['about-header__title']}> O projeto Racismômetro</h3>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure molestias eius error quidem perspiciatis facilis, veniam optio magni, veritatis quam, amet ab! Reprehenderit quasi quas eligendi quisquam vero beatae magni.</p>
      </Card>
    </div>
  );
};

export default About;
