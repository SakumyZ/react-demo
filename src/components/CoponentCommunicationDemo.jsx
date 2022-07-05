import React from 'react'

/**
 * 测试子组件
 *
 * @template P
 * @param {Object<P>} props props
 * @returns {React.FC} 子组件
 */
function ChildComponent(props) {
  const handleChange = e => {
    props.onChange(e.target.value)
  }
  return (
    <div>
      <input onChange={handleChange} type="text" />
    </div>
  )
}

/**
 * 组件间通信测试组件
 *
 * @returns {React.FC} 组件间通信测试组件
 */
export default function CoponentCommunicationDemo() {
  const handleChange = value => {
    console.log(value)
  }
  return (
    <div>
      <ChildComponent onChange={handleChange} />
    </div>
  )
}
