import {useState} from 'react';

const UseStateHook = () => {
  const [message, setMessage] = useState('Hello or Goodbye?');
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="all-state-container">
        <button onClick={() => setMessage('Hello')}>Say hello</button>
        <button onClick={() => setMessage('Goodbye')}>Say goodbye</button>
        <br />
        <div>{message}</div>
      </div>
      <p>----------------------------------</p>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <br />
        <div>{count}</div>
      </div>
    </>
  );
};

export default UseStateHook;
