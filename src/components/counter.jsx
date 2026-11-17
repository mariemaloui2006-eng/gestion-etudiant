export const Counter = () => {
  let count = 0;

  const handleClick = () => {
    count++;
    console.log(count);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};