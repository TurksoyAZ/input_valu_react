




import { useState } from 'react';
import './Counter.css'

const Counter = () => {

    const [count, setCount] = useState(0)
    const plus = () => setCount(count + 2)
    const minus = () => setCount(count - 2)

    return (
        <div>
            <button onClick={plus}>+</button>
            <span>{count}</span>
            <button onClick={minus}>-</button>
        </div>
    )
}


export default Counter;