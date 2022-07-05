import React from 'react'

/**
 * ES6+ 语法测试组件
 *
 * @returns {React.FC} ES6+ 语法测试组件
 */
export default function ESDemo() {
  const userInfo = {
    name: '张三',
    age: 18,
    gender: 1
  }

  // const name = userInfo.name
  // const { name } = userInfo

  // const {a, b, c} = props

  const userInfo1 = {
    name: '张三',
    age: 18,
    gender: 1,
    department: {
      id: '001',
      name: '开发部'
    }
  }

  const {
    name,
    age,
    gender: sex,
    department: { name: departmentName }
  } = userInfo1

  console.log(sex)
  // console.log(gender)

  // 相当于
  // const name = userInfo1.name
  // const name = userInfo1.age
  // const sex = userInfo1.gender
  // const departmentName = userInfo1.department.name

  console.log(userInfo1)

  const handleClick = (x, y) => {
    console.log(x + y)
  }

  return (
    <div>
      {/* <h1 onClick={handleClick}>ES6+ 语法</h1> */}
      <h1 onClick={() => handleClick(1, 2)}> ES6+ 语法</h1>
      <h2>对象的解构赋值</h2>

      <div className="flex">
        <div className="card">
          {JSON.stringify(userInfo)}
          <p>姓名：{userInfo.name}</p>
          <p>年龄：{userInfo.age}</p>
          <p>性别：{userInfo.gender}</p>
        </div>
        <div className="card">
          {JSON.stringify(userInfo1)}
          <p>姓名：{name}</p>
          <p>年龄：{age}</p>
          <p>性别：{sex}</p>
          <p>部门：{departmentName}</p>
        </div>
      </div>

      <hr />
    </div>
  )
}
