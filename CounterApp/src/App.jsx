import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const handleClick=()=>{
      setCount(count+1)
  }

  const handleRest=()=>{
    setCount(0)
  }

  return (
    <>
      <div className='body'>
          <h1>Counter App</h1>
      <hr />
        <div className='click'>
          <button onClick={handleClick}>Click Me</button>
          <button onClick={handleRest}>Reset</button>
        </div>
        <div className='count'>
        <p>You clicked {count} times</p>
        </div>
      </div>
    </>
  )
}

export default App
