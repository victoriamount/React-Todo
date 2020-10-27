import React from 'react';
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const toDoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    }
  }

  handleToggleItem = (todoId) => {
    this.setState({
      toDoList: this.state.toDoList.map(todo => {
        if(todo.id === todoId) {
          return {
            ...todo, 
            completed: !todo.completed
          }
        }
        else{
          return todo
        }
      })
    })
  }

  handleAddItem = (task) => {
    this.setState({
      toDoList: [...this.state.toDoList, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    })
  }

  handleClearItems = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(todo => (!todo.completed))
    })
  }

  render() {
    return (
      <div className='appBody'>
        <div className='appItems'>
          <h2>Today's Tasks</h2>
          <TodoList handleToggleItem={this.handleToggleItem} toDoList={this.state.toDoList} />
          <TodoForm handleAddItem={this.handleAddItem} handleClearItems={this.handleClearItems} />
        </div>
      </div>
    );
  }
}

export default App;
