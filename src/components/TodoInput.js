import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    TextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}))

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
                {/* <input 
                    placeholder="할일을 입력하세요"
                    value={this.state.inputValue}
                    onChange={handleChange}  
                /> */}
                <TextField
                    class={useStyles.TextField}
                    id="outlined-dense"
                    label="To do"
                    // className={}
                    margin="dense"
                    variant="outlined"
                    value={this.state.inputValue}
                    onChange={handleChange}
                />
                <Fab color="primary" aria-label="Add" onClick={handleClick}>
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

export default TodoInput;