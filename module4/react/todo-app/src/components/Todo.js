import { Component } from "react";


class Todo extends Component{
    constructor(){
        super();
        this.state = {
            tasks:["Learn JS","Learn DOM","Learn React","Learn Node"],
            currTask:""
        }
    }
    
    handleChange = (e)=>{
        // console.log(e.target.value);
        this.setState({
            currTask:e.target.value
        })
    }

    handleAddTask = ()=>{
        this.setState({
            tasks:[...this.state.tasks,this.state.currTask],
            currTask:""
        })
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
                <button onClick={this.handleAddTask}>Add Task</button>
                <ul>
                    {this.state.tasks.map((ele)=>(
                        <li>
                            <p>{ele}</p>
                            <button>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Todo;
