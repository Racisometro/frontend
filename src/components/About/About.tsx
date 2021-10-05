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
        <p>Inconformadas com o crime de racismo, e com a falta de políticas públicas eficazes para eliminação deste crime, o Racismômetro foi desenvolvido para apoiar o empoderamento dos depoentes e promover a ruptura do cenário racista vivido no Brasil.</p>
        <p>O Racismômetro é uma ferramenta visual do quantitativo de depoimentos de casos de racismo publicados nas redes sociais mais utilizadas no Brasil. Nosso objetivo é que o Racismômetro sirva de referência para a obtenção de dados concretos e confiáveis a respeito de atos racistas cotidianos.</p>
      </Card>
    </div>
  );
};

export default About;
