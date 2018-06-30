import React from "react";
import TodoItem from "./TodoItem.js";
import TodoFooter from './TodoFooter';


export default class TodoMain extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			list: [{
				id: 0,
				name: "吃饭",
				status: 0
			},{
				id: 1,
				name: "打豆豆",
				status: 0
			},{
				id: 2,
				name: "回家",
				status: 0
			},{
				id: 3,
				name: "睡觉",
				status: 0
			}],
			finished: 0
		};
	}


	addTask (newitem) {
		var allTask = this.state.list;
		allTask.push(newitem);
		this.setState({
			list: allTask
		});
	}

	updateFinished (todoItem) {
		var sum = 0;
		this.state.list.forEach( (item) => {
			if (item.id === todoItem.id) {
				item.status = todoItem.status;
			}
			if (item.status === 1) {
				sum++;
			}
		});
		this.setState({
			finished: sum
		});
	}

	updateTotal (todoItem) {
		var obj = [], sum = 0;
		this.state.list.forEach((item) => {
			if (item.id !== todoItem.id) {
				obj.push(item);
				if (item.status === 1 ) {
					sum++;
				}
			}
		});
		this.setState({
			list: obj,
			finished: sum
		});
	}

	render () {
		return (
			<div>
				<ul>
					{this.state.list.map ((item, index) =>
						<TodoItem 
							item={item}  
							finishedChange={this.updateFinished.bind(this)} 
							totalChange={this.updateTotal.bind(this)}
							key={index}
						/>
					)}
					<li>{this.state.finished}已完成&nbsp;/&nbsp;{this.state.list.length}总数</li>
				</ul>
				<TodoFooter addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
			</div>
		);
	}
}
