import React, { createContext, useState } from "react";

interface GlobalData {
  name: string;
  age: number;
  city: "杭州" | "绍兴";
}
const userSomeone: GlobalData = {
  name: "小蓝",
  age: 27,
  city: "绍兴",
};
export const appContext = createContext(userSomeone);

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(userSomeone);
  return <appContext.Provider value={state}>{props.children}</appContext.Provider>; // props.children 表示被当前组件包裹的所有子节点，这里的意思就是使用appContext.Provider把所有子组件包裹，被包裹的子组件就能使用这里定义的全局状态了
};
