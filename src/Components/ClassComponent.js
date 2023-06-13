import React, { Component } from 'react'

class ClassComponent extends Component {




    constructor(){
     super();
    this.state={
        compteur : 0
    }
}


increment=()=>{
    this.setState(
        {compteur : this.state.compteur +1 }
    )
}

decrement=()=>{
    this.setState({
        compteur : this.state.compteur -1
    })
}
// life cycle 
        componentDidMount(){
            console.log(' fezit mil noum ')
        }

         componentDidUpdate(){
            console.log(' n3mel fi update ')
            alert('test ')
         }
 componentWillUnmount(){
    console.log(' gutlouni ')
 }

render(){
    return(
        <div>

hello test class component
            <h1>  {this.state.compteur}</h1> 
<button   onClick={ ()=> this.increment()  }  > increment</button>
<button   onClick={()=>this.decrement()} >decrement</button>
</div>    )
}




}


export default ClassComponent

