import React, { ReactElement, useEffect, useRef } from "react";

const ByteDance: React.FC<any> = () => {
  useEffect(() => {
    console.log("leekcode22");

    const edge1 = [
      [0, 1, 10],
      [1, 2, 10],
      [2, 5, 10],
      [0, 3, 1],
      [3, 4, 10],
      [4, 5, 15],
    ];

    const minCost = function (maxTime, edges, passingFees) {
      let lineList = [
        { time: 0, feeList: [passingFees[0]], line: [0], lastCity: undefined },
      ];
      const resultList = [];
      const findEdgeDetailList = (line) => {
        const nowPoint = line.line[line.line.length - 1];
        let resultEdge = [];
        for (let i = 0; i < edges.length; i++) {
          // edge[0]和[1]都可能是起点
          // lastCity用于防止回头
          if (edges[i][0] === nowPoint && line.lastCity !== edges[i][1]) {
            resultEdge.push({
              nextCity: edges[i][1],
              lastCity: nowPoint,
              edge: { ...edges[i] },
            });
          }
          if (edges[i][1] === nowPoint && line.lastCity !== edges[i][0]) {
            resultEdge.push({
              nextCity: edges[i][0],
              lastCity: nowPoint,
              edge: { ...edges[i] },
            });
          }
        }
        console.log("resultEdge", resultEdge);
        return resultEdge;
      };
      while (lineList.length !== 0) {
        let nextStepLineList = [];
        for (let i = 0; i < lineList.length; i++) {
          console.log("lineList[i]", lineList[i]);
          let nextEdge = findEdgeDetailList(lineList[i]);

          let motherLine = lineList[i];
          let childLine = [];
          // 每条line向前走一步，所有可能性都走
          for (let j = 0; j < nextEdge.length; j++) {
            // 时间是否超出
            if (motherLine.time + nextEdge[j].edge[2] > maxTime) {
              // 时间超出，不存结果里面，忽略
            } else {
              if (nextEdge[j].nextCity !== passingFees.length - 1) {
                // 未到达终点，往前走
                childLine.push({
                  time: motherLine.time + nextEdge[j].edge[2],
                  feeList: [
                    ...motherLine.feeList,
                    passingFees[nextEdge[j].nextCity],
                  ],
                  line: [...motherLine.line, nextEdge[j].nextCity],
                  lastCity: nextEdge[j].lastCity,
                });
              } else {
                // 达到终点，推到最后结果中
                resultList.push({
                  time: motherLine.time + nextEdge[j].edge[2],
                  feeList: [
                    ...motherLine.feeList,
                    passingFees[nextEdge[j].nextCity],
                  ],
                  line: [...motherLine.line, nextEdge[j].nextCity],
                });
              }
            }
          }
          nextStepLineList = [...nextStepLineList, ...childLine];
        }
        lineList = nextStepLineList;

        console.log("刷新lineList", lineList);
      }
// 这里找出路线里最便宜的简单代码不写了
      return resultList;
    };

    // console.log(minCost(29, edge1, [5, 1, 2, 20, 20, 3]));
    console.log(minCost(30, edge1, [5, 1, 2, 20, 20, 3]));
    //
  }, []);

  return <div>Leekcode1</div>;
};

export default ByteDance;
