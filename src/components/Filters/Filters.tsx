import React from 'react';
import styles from './Filters.module.css';
import TimeFilter from '../TimeFilter/TimeFilter';

const Filters: React.FC<{ firstFilter: string; secondFilter: string }> = (
  props
) => {
  return (
    <div className={styles.container}>
      <TimeFilter
        firstFilter={props.firstFilter}
        secondFilter={props.secondFilter}
      />
    </div>
  );
};

export default Filters;
