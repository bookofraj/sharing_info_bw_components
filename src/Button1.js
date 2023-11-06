import React from 'react'
import { useState } from 'react'

export default function Button1() {

    const [data, setData] = useState(0)

    function handleClick() {
        setData(data + 1)
    }

    return (
        <div>
            <button onClick={handleClick}>Clicked {data} times!</button>
        </div>
    )
}
