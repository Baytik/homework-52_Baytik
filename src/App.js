import React, {Component} from 'react';
import './App.css';
import Task from "./component/Task/Task";
import nanoid from 'nanoid';

class App extends Component {
    state = {
        tasks: [
            {text: 'Buy Milk', id:nanoid()},
            {text: 'Walk with dog', id:nanoid()},
            {text: 'Do homework', id:nanoid()},
        ],
        task: ''
    };

    changeInput = (e) => this.setState({task: e.target.value});

    addNewTask = () => {
        const newTask = {
            id: nanoid(),
            text: this.state.task
        };
        this.setState({tasks: [...this.state.tasks, newTask]})
    };



    render() {
        return (
            <div className="App">
                <input onChange={this.changeInput}  type="text" placeholder="Add new task"/>
                <button onClick={this.addNewTask} className="btn">Add</button>
                {this.state.tasks.map(task =>
                    <Task
                        key={task.id}
                        text={task.text}
                    />
                )}
            </div>
        )
    }
}
export default App;