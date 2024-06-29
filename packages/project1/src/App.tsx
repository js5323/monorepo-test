import { useState } from 'react'
import './App.css'
import TestComponent from '@ben/common/components/TestComponent/TextComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestComponent title='test' />
      <h1>Project1: Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
