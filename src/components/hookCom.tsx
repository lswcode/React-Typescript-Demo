import React, { useState, useEffect, useContext } from "react";
import { theContext } from "../App";
import { appContext } from "../state/appStateProvider";

export const HookCom: React.FC = (props) => {
  const [num, setNum] = useState<number>(1); // useState接收一个泛型，来定义状态数据的类型
  const [num2, setNum2] = useState<number>(100);

  useEffect(() => {
    // 默认dom的首次渲染和之后的每次更新渲染都会调用一次useEffect函数
    console.log("num发生变化:", num);
  }, [num]); // 在数组中设置状态值后，只有这个值发生变化才会执行useEffect函数，此时更新num2不会执行里面的函数，当数组为空时，表示只在首次渲染时执行一次

  const { name } = useContext(theContext); // 父组件传递过来数据是一个对象，使用解构赋值 解构出来
  const { city } = useContext(appContext); // 这是全局状态传递的数据
  return (
    <div>
      <div
        onClick={() => {
          setNum(num + 1);
        }}
      >
        点击改变数据：{num}
      </div>
      <hr />
      <div
        onClick={() => {
          setNum2(num2 + 1);
        }}
      >
        点击改变数据：{num2}
      </div>
      <div>父组件传递的数据:{name}</div>
      <div>全局state传递的数据:{city}</div>
    </div>
  );
};
