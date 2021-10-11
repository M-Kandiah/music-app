import React from 'react'
import { useState } from 'react'

const Counter = () => {


    const [readsCount, SetReadsCount] = useState(0)
    const increaseCount = () => {
        SetReadsCount(readsCount => readsCount + 1)
    } 

    return (
        <div>

            <p>{readsCount}</p>
            <button aria-label='Reset' onClick={increaseCount}>Raise Count</button>
            
        </div>
    )
}

export default Counter
