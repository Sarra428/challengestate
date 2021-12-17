import './App.css';
import React, { Component } from 'react'


export class App extends Component {

  state={
    todos:[{id:0, task:'eat', done:false},
           {id:1, task:'sleep', done:false},
           {id:2, task:'repeat', done:false}],

    text:''
    
        }



        addtodo=()=>{

          this.setState({todos:[...this.state.todos, {id:Math.random(), task:this.state.text, done:false}]    })

        }


        deletetodo=(x)=>{
          this.setState({todos: this.state.todos.filter( el => el.id !=x    )})

        }


        donetodo=(x)=>{
          this.setState({todos:this.state.todos.map( el=>   el.id==x ?  {...el, done:!el.done}   :   el)})


        }


  render() {
    return (
      <div>
       <input   onChange={(event)=>this.setState({text: event.target.value})}   />
      <button  onClick={()=> this.addtodo()}>Add</button>
 
      {this.state.todos.map(el=> 
      <div>
      <ul>{el.task}</ul>
      <button  onClick={()=>this.donetodo()}    >Done</button>
      <button  onClick={ ()=>this.deletetodo()  }    >Delete</button>
      </div>
      )}


      </div>
    )
  }
}



export default App

