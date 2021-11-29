import React, { Component} from 'react'
interface TheProps{

}
interface TheState{
isOpen:boolean
}


export default class shoppingCard extends Component<TheProps,TheState> {
 // 类组件中的Component接受一个泛型，泛型中有三个值，第一个P表示props，第二个S表示state，第三个SS表示自定义数据（可以省略）
 constructor(props:TheProps){
     super(props)
     this.state={
         isOpen:false
     }
 }
 clickFun=(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{   // 使用箭头函数，this可以访问到，如果使用普通函数，严格模式下，this默认为undefined
     // e表示点击事件参数 
    this.setState({isOpen:!this.state.isOpen},()=>{
        console.log('这是setState函数的第二个参数，回调函数中的代码：',this.state.isOpen);
    })
    console.log('这是直接写在setState后面的代码：',this.state.isOpen);
    // setState是一个异步函数，和Vue一样，直接在下面使用ref获取到的dom内容还未更新，如果需要使用更新完毕后的dom，写在后面的回调函数中
 }
 componentDidMount(){ // 生命周期函数中，不需要使用箭头函数就能使用this访问到state
// 在这发送网络请求，初始化数据
 }
    render() {
        return (
            <div>
                <button onClick={this.clickFun}>购物车</button>
                <div>
                    <ul style={{display:this.state.isOpen?'block':'none'}}>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
            </div>
        )
    }
}
