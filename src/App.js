import React, {Component} from 'react';
import TodoMain from './components/TodoMain';
import "./main.css";

export default class App extends Component{
  render(){
	return (
		<div className="todo-wrap">
			<h1>React Todo</h1>
			<TodoMain />
		</div>
		
	)
  }
}