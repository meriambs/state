import React, { Component } from 'react'
import ClassComponent from './Components/ClassComponent';
import FunComponnets from './Components/FunComponnets';

class App extends Component{




  constructor(){
    super();
    this.state={
      show : false
    }
  }

  toggel=()=>{
this.setState({
  show : !this.state.show
})
  }

  render(){
    return(<div>
      <button  onClick={()=>this.toggel()}   >Show component</button>
      <FunComponnets/>
{ this.state.show ?    <ClassComponent/> : (<h1>nothing to show</h1>)   }     

     
    </div>)
  }
}

export default App


