import styles from './Counter.module.css';

const Counter: React.FC<{ amount: number }> = (props) => {
  // TODO: create a function to fulfill the counter properly. Use padStart()!
  const counterText = '000.000.000';

  const higestValueText = 'Milhões';
  const secondBiggerValueText = 'Milhares';
  const lowestValueText = 'Unidades';
  return (
    <div className={styles.counter}>
      <h1 className={styles['counter__number']}>{counterText}</h1>
      <div className={styles['counter__text']}>
        <span>{higestValueText}</span>
        <span>{secondBiggerValueText}</span>
        <span>{lowestValueText}</span>
      </div>
    </div>
  );
};

export default Counter;
