import { useState } from 'react';

export default function Todo() {
    const [count,setCount] = useState(0);

   const handleIncrement = ()=>{
    setCount(prev=>prev+1)
   }
   const handleDecrement = (prev)=>{
   setCount(prev=>prev-1)
   }

    return (
        <>
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </>
    );
}
