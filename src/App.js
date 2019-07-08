import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    title: "초기값",
                    id:0,
                    done: true,
                },
            ],
            uniqueId: 1,
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(title) {
        const { tasks, uniqueId } = this.state;

        tasks.push({
            title,
            id: uniqueId,
        });

        this.setState({
            tasks,
            uniqueId: uniqueId + 1,
        });
    }

    deleteTodo() {

    }
    modifyTodo() {

    }


    render() {
        const { addTodo } = this; 
        return (
            <div className="App">
                <h1>Todo List</h1>
                <TodoInput addTodo={addTodo} />
                <TodoList tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App; 