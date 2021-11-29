import React from 'react'
import styles from '../App.module.css'

interface RobotProps{
id:number,
name:string,
grade:number
}
// FC接收一个泛型，用来定义函数的参数中的props的类型
export const Robot:React.FC<RobotProps>=({id,name,grade}) =>{  // 这里使用了解构赋值，直接把props数据解构出来了，在函数内部就可以直接使用，默认函数的参数就是整个props
    return (
        <div>
            <img className={styles['robot-img']} src={`https://robohash.org/${id}`} alt="robot" />
            <h1 className={styles.h1}>{name}</h1>
            <h2 className={styles.h2}>{grade}</h2>
        </div>
    )
}
