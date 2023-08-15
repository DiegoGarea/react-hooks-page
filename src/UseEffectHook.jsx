import {useEffect, useState} from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [activity, setActivity] = useState('');

  useEffect(() => {
    fetch('https://www.boredapi.com/api/activity')
      .then((res) => res.json())
      .then((data) => setActivity(data.activity));
  }, [count]);

  // const handleClick = () => {
  //   fetch('https://www.boredapi.com/api/activity')
  //     .then((res) => res.json())
  //     .then((data) => setActivity(data.activity));
  // };

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        {/* <button onClick={() => setCount(count - 1)}>-</button> */}
        {/* <button onClick={handleClick}>Phrase</button> */}
        {activity}
      </div>
    </>
  );
};

export default UseEffectHook;
