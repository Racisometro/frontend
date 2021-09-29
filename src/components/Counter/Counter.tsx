const Counter: React.FC<{ amount: number }> = (props) => {
  const formatCounter = (amount: number) => {
    const point = <span>.</span>;

    const textAmount = amount.toString();
    const highestValue = textAmount.substr(0, 3);
    const mediumValue = textAmount.substr(3, 3);
    const lowestValue = textAmount.substr(6, 3);

    return (
      <h1>
        {highestValue}
        {point}
        {mediumValue}
        {point}
        {lowestValue}
      </h1>
    );
  };

  return <div>{formatCounter(props.amount)}</div>;
};
export default Counter;
