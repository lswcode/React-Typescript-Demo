import React, { useState, useEffect } from 'react'

export  const HookCom:React.FC=(props)=> {
    const [num,setNum]=useState<number>(1)  // useState接收一个泛型，来定义状态数据的类型
    const [num2,setNum2]=useState<number>(100)

    useEffect(() => {  // 默认dom的首次渲染和之后的每次更新渲染都会调用一次useEffect函数
        console.log('num发生变化:',num);
    }, [num])  // 在数组中设置状态值后，只有这个值发生变化才会执行useEffect函数，此时更新num2不会执行里面的函数


    return (
        <div>
            <div onClick={()=>{setNum(num+1)}}>点击改变数据：{num}</div>
            <hr />
            <div onClick={()=>{setNum2(num2+1)}}>点击改变数据：{num2}</div>
        </div>
    )
}
