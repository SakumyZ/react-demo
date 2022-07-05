import React, { useEffect } from 'react'

/**
 * useEffect 测试组件
 *
 * @returns {React.FC} 测试组件
 */
export default function UseEffectDemo() {
  const [count, setCount] = React.useState(0)

  console.log('UseEffectDemo Rendered')
  useEffect(() => {
    console.log('UseEffectDemo mounted')
  }, [])

  useEffect(() => {
    console.log('UseEffectDemo mounted')
  }, [count])
  return (
    <div>
      <h1>useEffect demo</h1>

      <h2>模拟 coponentDidMount 生命周期</h2>

      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +1
      </button>
      <hr />
    </div>
  )
}
