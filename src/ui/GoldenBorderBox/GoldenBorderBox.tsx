import React from 'react';
import styles from './GoldenBorderBox.module.css';

const GoldenBorderBox: React.FC = (props) => {
  return <div className={styles['golden-box']}>{props.children}</div>;
};
export default GoldenBorderBox;
