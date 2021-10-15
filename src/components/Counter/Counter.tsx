import styles from './Counter.module.css';

const Counter: React.FC<{ amount: number }> = (props) => {
  const leftNumber = '000';
  const middleNumber = '000';
  const rightNumber = '000';

  const leftNumberText = 'Milhões';
  const middleNumberText = 'Milhares';
  const rightNumberText = 'Unidades';
  return (
    <div className={styles.counter} data-testid="counter-component">
      <div className={styles['counter__block']}>
        <h1 id="left-numbers" className={styles.counter__number}>
          {leftNumber}
        </h1>
        <span className={styles.counter__text}>{leftNumberText}</span>
      </div>

      <div className={styles.counter__point}>
        <span>.</span>
      </div>

      <div className={styles['counter__block']}>
        <h1 id="middle-numbers" className={styles.counter__number}>
          {middleNumber}
        </h1>
        <span className={styles.counter__text}>{middleNumberText}</span>
      </div>

      <div className={styles.counter__point}>
        <span>.</span>
      </div>

      <div className={styles['counter__block']}>
        <h1 id="right-numbers" className={styles.counter__number}>
          {rightNumber}
        </h1>
        <span className={styles.counter__text}>{rightNumberText}</span>
      </div>
    </div>
  );
};

export default Counter;
