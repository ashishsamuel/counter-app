import React, { Component } from 'react'

export default class Count extends Component {
    constructor(){
        super();
        this.state = {count:0}
    }

    increment = ()=>{
        this.setState({count:this.state.count+1});
    }

    decrement = ()=>{
        this.setState({count:this.state.count-1});
    }

    render (){
        return (
            <div>
                <h4>{this.state.count}</h4>
                <button onClick={this.increment} style={{padding:'5px',border:'1px solid',borderRadius:'5px',backgroundColor:'yellow',width:'150px',marginLeft:'15px'}}>Change course</button>
                <button onClick={this.decrement} style={{padding:'5px',border:'1px solid',borderRadius:'5px',backgroundColor:'yellow',width:'150px',marginLeft:'15px'}}>Change course</button>
            </div>
        )
    }
}

