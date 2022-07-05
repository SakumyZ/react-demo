import React from 'react'

/**
 * useState 测试组件
 *
 * @returns {React.FC} 测试组件
 */
export default function UseStateDemo() {
  // const [count, setCount] = React.useState(0)
  const countState = React.useState(0)
  const count = countState[0]
  const setCount = countState[1]
  const [asyncCount, setAsyncCount] = React.useState(0)
  console.log('UseStateDemo Rendered')

  const [userInfo, setUserInfo] = React.useState({
    name: '张三',
    age: 18,
    gender: 0,
    children: {
      name: '1111'
    }
  })

  const [arrayState, setArrayState] = React.useState([1, 2, 3])

  /**
   * 点击切换用户
   */
  const changeUserInfo = () => {
    // const obj = JSON.parse(JSON.stringify(userInfo))
    // obj.age = 100
    // console.log('userInfo === obj', userInfo === obj)
    // setUserInfo(obj)

    // userInfo.age = Math.floor(Math.random() * 100)
    setUserInfo({ name: '1111' })
  }

  /**
   * 点击往数组随机增加数值
   */
  const changeArrayState = () => {
    arrayState.push(Math.floor(Math.random() * 100))
    setArrayState(arrayState)
    // setArrayState([...arrayState, Math.floor(Math.random() * 100)])
  }

  const handleAsyncPlus = () => {
    setTimeout(() => {
      // setAsyncCount(asyncCount + 1)
      setAsyncCount(state => state + 1)
    }, 1000)
  }

  return (
    <div>
      <h1>useState demo</h1>
      <h2>一般数据类型的 setState</h2>
      <p>The count is {count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click it !!!
      </button>

      <hr />

      <h2>对象的 setState</h2>
      <button onClick={changeUserInfo}>点击切换用户</button>
      <p>{JSON.stringify(userInfo)}</p>

      <hr />

      <h2>数组的 setState</h2>
      <button onClick={changeArrayState}>点击往数组随机增加数值</button>
      <p>{JSON.stringify(arrayState)}</p>

      <hr />

      <h2>如何确保异步请求的setState 的值都是最新的</h2>
      <p>{asyncCount}</p>
      <button onClick={handleAsyncPlus}>异步加 1</button>
      <hr />
    </div>
  )
}
