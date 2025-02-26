import React, { ReactElement, useEffect, useRef, useState } from "react";

const ByteDance: React.FC<any> = () => {
  const [row, setRow] = useState(3);
  const [col, setCol] = useState(3);

  const dataInit = [];
  for (let i = 0; i < row; i++) {
    dataInit.push([]);
  }
  for (let i = 0; i < row; i++) {
    for (let i = 0; i < row; i++) {
      dataInit[i].push("1");
    }
  }
  const [saveDate, setSaveDate] = useState(dataInit);

  const change1 = (e) => {
    setRow(e.target.value);
  };
  const change2 = (e) => {
    setCol(e.target.value);
  };

  let arr1 = [];
  for (let i = 0; i < row; i++) {
    arr1.push(i);
  }
  let arr2 = [];
  for (let i = 0; i < col; i++) {
    arr2.push(i);
  }
  const changeVal = (i, j) => (e) => {
    console.log("11", i, j, e.target.value);
    saveDate[i][j] = e.target.value;
    if (!isNaN(Number(e.target.value))) {
      setSaveDate([...saveDate]);
    } else {
    }
  };
  return (
    <div>
      <input type="text" onChange={change1} value={row} />
      <input type="text" onChange={change2} value={col} />
      <div>
        {arr1.map((i) => (
          <div key={i} style={{ display: "flex" }}>
            {arr2.map((j) => (
              <input
                style={{
                  border: "1px red solid",
                  height: "60px",
                  width: "200px",
                  display: "inline-block",
                }}
                key={j}
                value={saveDate[i][j]}
                onChange={changeVal(i, j)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ByteDance;
