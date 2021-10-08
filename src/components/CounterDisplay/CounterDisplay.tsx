import Counter from '../Counter/Counter';
import Filters from '../Filters/Filters';
import styles from './CounterDisplay.module.css';
import GoldenBorderBox from '../../ui/GoldenBorderBox/GoldenBorderBox';

const CounterDisplay: React.FC = (props) => {
  const amount = 0;
  const firstFilter = '08/09/20';
  const secondFilter = '08/09/21';

  return (
    <div className={styles.container} data-testid="counter-display-component">
      <GoldenBorderBox>
        <div className={styles['upper-components']}>
          <Counter amount={amount} />
        </div>
        <div className={styles['lower-components']}>
          <Filters firstFilter={firstFilter} secondFilter={secondFilter} />
        </div>
      </GoldenBorderBox>
    </div>
  );
};

export default CounterDisplay;
