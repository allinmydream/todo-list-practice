import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        // a 태그를 사용할 시 e.preventDefault로 기본 이벤트 제거 해야함 
        const inputValue = this.state.inputValue;
        this.props.addTodo(inputValue);
        this.setState({
            inputValue: '',
        })
        
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    }

    render() {
        const { handleChange, handleClick } = this;
        return(
            <div className="TodoInput">
                <input
                    className="content" 
                    placeholder="할일을 입력하세요"
                    value={this.state.inputValue}
                    onChange={handleChange}  
                />
                <button onClick={ handleClick }>Add</button>
            </div>
        )
    }
}

export default TodoInput;