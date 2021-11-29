import {Robot} from './components/robot'
import { robotData } from './utils/robotData';
import styles from './App.module.css'
import ShoppingCard from './components/shoppingCard';
import { HookCom } from './components/hookCom';


function App() {
  return (
   
    <>
     <ShoppingCard/>
     <hr />
     <div className={styles.app}>
      {/* react中使用map遍历渲染时，使用小括号里面写jsx，生成react元素，使用花括号时表示处理数据 */}
      {robotData.map((item)=>(<Robot key={item.id} id={item.id} name={item.name} grade={item.grade}  />) 
      )}
    </div>
    <hr />
    <HookCom></HookCom>
    </>
   
  );
}

export default App;
