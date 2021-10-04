import React from 'react';
import GoldenBorderBox from '../../ui/GoldenBorderBox/GoldenBorderBox';
import styles from './Filters.module.css';
import TimeFilter from '../TimeFilter/TimeFilter';

const Filters: React.FC<{ firstFilter: string; secondFilter: string }> = (
  props
) => {
  return (
    <GoldenBorderBox>
      <div className={styles.container}>
        <TimeFilter
          firstFilter={props.firstFilter}
          secondFilter={props.secondFilter}
        />
      </div>
    </GoldenBorderBox>
  );
};

export default Filters;
