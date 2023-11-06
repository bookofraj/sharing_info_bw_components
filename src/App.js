import { useState } from 'react';
import Button1 from './Button1';
import Button2 from './Button2';
import './App.css'

export default function App() {
    const [count, setCount] = useState(0)

    function handleMyClick() {
        setCount(count+1)
    }

    return (
        <div className='app'>
            <div className='card' id='cntr1'>
                <h1>States Are In Child Components</h1>
                <h2>Separate Counters</h2>
                <Button1 />
                <br />
                <Button1 />
                <br />
            </div>
            <div className='card' id='cntr2'>
                <h1>States Passes from Child to Parent Component</h1>
                <h2>Linked Counters</h2>
                <Button2 count={count} onClick={handleMyClick} />
                <br />
                <Button2 count={count} onClick={handleMyClick} />
                <br />
            </div>
        </div>
    )
}