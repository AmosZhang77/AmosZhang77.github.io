


import React, { ReactElement, useEffect, useRef, useState } from "react";

const ByteDance: React.FC<any> = () => {


  useEffect(() => {
    let object = { 'a': [{ 'b': { 'c': 3 } }] };
    const get = (obj, path, defaultVal) => {
      let res
      // path是数组
      if(Array.isArray(path) ){
        let temp = obj

        for(let i = 0;i<path.length; i++){
          temp = temp?.[path[i]]
        }
        res = temp ?? defaultVal
        return res
      }
      if(typeof path === "string" ){
       const arr = path.split('.');
       console.log('arr', arr);
       // path是 . 隔开的字符串
       if(Array.isArray(arr)){
         let temp = obj

         for(let i = 0;i<path.length; i++){
           temp = temp?.[path[i]]
         }
         res = temp ?? defaultVal
         return res
       }else {
         const arr = path.split('');
       }

      }
    }

    // console.log('arrPath', get(object,['a', '0', 'b','c']))
    console.log('arrPath', get(object, 'a.b.c', 'default'))
  }, []);
console.log('d')
  return (
    <div>

    </div>
  );
};

export default ByteDance;
