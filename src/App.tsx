import { Robot } from "./components/robot";
import { robotData } from "./utils/robotData";
import styles from "./App.module.css";
import ShoppingCard from "./components/shoppingCard";
import { HookCom } from "./components/hookCom";
import { createContext, useContext } from "react";
import { appContext } from "./state/appStateProvider";
import { Grid } from "./components/grid";

const contextData = {
  // 需要传递的数据
  name: "小白",
};

export const theContext = createContext(contextData); // 创建createContext

function App() {
  const { city } = useContext(appContext); // 这是全局状态传递的数据
  return (
    <>
      <div>这是全局状态传递给App.tsx的数据：{city}</div>
      <ShoppingCard />
      <hr />
      <div className={styles.app}>
        {/* react中使用map遍历渲染时，使用小括号里面写jsx，生成react元素，使用花括号时表示处理数据 */}
        {robotData.map((item) => (
          <Robot key={item.id} id={item.id} name={item.name} grade={item.grade} />
        ))}
      </div>
      <hr />
      <theContext.Provider value={contextData}>
        {/* value中就是传递的数据 */}
        <HookCom />
      </theContext.Provider>
      <hr />
      <Grid />
    </>
  );
}

export default App;
