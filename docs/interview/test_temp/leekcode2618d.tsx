


import React, { ReactElement, useEffect, useRef, useState } from "react";
const ByteDance: React.FC<any> = () => {
  let option=[
    {
      key:'userId',
      val:'userId'
    },
    {
      key:'name',
      val:'name'
    },
    {
      key:'age',
      val:'age',
      sort: true
    },
    {
      key:'gender',
      val:'gender'
    },
    {
      key:'birth',
      val:'birth'
    },
  ]
  let listInit = [
    {
      userId: 1,
      name: 'n1',
      age: 1,
      gender: 'male',
      birth: '1991',
    },
    {
      userId: 2,
      name: 'n2',
      age: 2,
      gender: 'female',
      birth: '1992',
    },
    {
      userId: 3,
      name: 'n3',
      age: 3,
      gender: 'female',
      birth: '1993',
    }
  ]
  const [list, setList] = useState(listInit)
  const sortFn =(keyObj)=>{
    console.log('keyObj',keyObj)

     const arr = list.sort(
        (a,b)=>{

          console.log('a[keyObj.key]',a[keyObj.key])
          console.log('b[keyObj.key]',b[keyObj.key])

          return  b[keyObj.key] - a[keyObj.key]
        }
    )
    console.log('listSort',list)
    console.log('arr',arr)
    setList([...arr])
  }
  useEffect(() => {

  }, []);
console.log('d')
  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              option.map((keyObj,j) => (
                    <th>{keyObj.val} {keyObj.sort&& <button onClick={()=>{sortFn(keyObj)}}>排序</button>}</th>
                ))
            }
          </tr>
        </thead>

        <tbody>
          {list.map((item, i) => (
            <tr key ={i}>
              {option.map((key,j) => (
                <td>{item[key.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ByteDance;
