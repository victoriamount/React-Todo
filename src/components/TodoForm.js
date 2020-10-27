import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input)
        this.setState({
            input: ''
        })
    }

    handleClear = () => {
        this.props.handleClearItems()
    }

    render(){
        return(
            <form className='addTodoForm' onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChanges} type='text' name='task' placeholder='...todo' />
                <button>Add Todo</button>
                <button onClick={this.handleClear} >Clear Completed</button>

            </form>
        )
    }
}

export default TodoForm; 