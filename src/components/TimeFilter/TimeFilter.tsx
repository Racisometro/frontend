import React from 'react';
import styles from './TimeFilter.module.css';

const TimeFilter: React.FC<{ firstFilter: string; secondFilter: string }> = (
  props
) => {
  const timePeriodFilter = 'Menções de racismo entre:';
  const firstFilterText = props.firstFilter;
  const conjunctionText = ' e ';
  const secondFilterText = props.secondFilter;

  return (
    <div className={styles['time-filter']} data-testid="time-filter-component">
      <h3 className={styles['time-filter__title']}>{timePeriodFilter}</h3>
      <p className={styles['time-filter__text']}>
        <span className={styles['time-filter__button']}>{firstFilterText}</span>
        {conjunctionText}
        <span className={styles['time-filter__button']}>
          {secondFilterText}
        </span>
      </p>
    </div>
  );
};

export default TimeFilter;
