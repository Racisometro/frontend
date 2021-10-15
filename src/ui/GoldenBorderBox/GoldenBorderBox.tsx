import React from 'react';
import styles from './GoldenBorderBox.module.css';

const GoldenBorderBox: React.FC = (props) => {
  return <div className={styles['golden-box']} data-testid="golden-border-box-component">{props.children}</div>;
};
export default GoldenBorderBox;
