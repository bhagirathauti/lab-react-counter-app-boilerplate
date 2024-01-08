//class component
import React from "react";

export default class Class extends React.Component{
    constructor(){
        super()
        this.state={count:0}
    }
    handleClick=(val)=>{
        if(val==0){
            this.setState({count:0})
        }
        else{
            this.setState({count:this.state.count+val})
        }
    }
    render(){
        return(
            <>
            <h1>Counter App</h1>
            <p>{this.state.count}</p>
            <button onClick={()=>{this.handleClick(1)}}>+</button>
            <button onClick={()=>{this.handleClick(-1)}}>-</button>
            <button onClick={()=>{this.handleClick(-this.state.count)}}>Reset</button>
            </>
        )
    }
}
