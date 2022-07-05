import React, { useMemo } from 'react'

const UseMemoDemo = () => {
  const [count, setCount] = React.useState(0)
  const data = useMemo(() => {
    return Math.pow(count, 2)
  }, [count])

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h2>正常传递依赖项</h2>
      <div>{count}</div>
      <div>{data}</div>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default UseMemoDemo
