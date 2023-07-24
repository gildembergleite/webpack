import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(count + 1)

  const handleRest = () => setCount(0)

  return (
    <div>
      <h2>Webpack integrado com react</h2>
      <p>Count: {count}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleRest}>Reset</button>
      </div>
    </div>
  )
}
