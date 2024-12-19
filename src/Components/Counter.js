import React, { useState } from 'react'

const Counter = () => {
    const [Count, setCount] = useState(0)
    return (
    <div>
        <button onClick={() => setCount(Count + 1)}>Increment</button>
        <h2>{Count}</h2>
        <button onClick={() =>Count>0 && setCount(Count - 1)}>Decrement</button>
    </div>
    )
} 
export default Counter