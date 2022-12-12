import './App.css';
import { useEffect, useState } from 'react';

function Learning() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    console.log({ count });
    setCount(c => c + 1);
  }

  const outer = (count) => {
    const inner = () => {
      console.log({ count });
    }
    return inner;
  }


  useEffect(() => {
    const normalFunction = () => {
      console.log({ count });
    }
    document.addEventListener('keydown', normalFunction);
    return () => {
      document.removeEventListener('keydown', normalFunction);
    }
  }, [count])

  return (
    <div className="App">
      Learn
      <button onClick={clickHandler}>Click me</button>
      <div>{count}</div>
      <button onClick={outer(count)}>Get Stale state</button>
    </div>
  );
}


export default Learning;
