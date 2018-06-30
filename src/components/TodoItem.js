import React, {Component} from 'react';

export default class TodoItem extends React.Component{
constructor (props) {
		super(props);


	} 

	handleFinished () {
		var status = this.props.item.status;

		status = (status === 0 ? 1 : 0);

		var obj = {
			id: this.props.item.id,
			name: this.props.item.name,
			status: status
		}
		
		this.props.finishedChange(obj);	
	}

	handleDelete () {
		this.props.totalChange(this.props.item);
	}

	render () {
		const item = this.props.item;

		const unfinish = {
			backgroundColor: '#fff',

		};

		const finish = {

			backgroundColor: '#c3daa1',
			color: '#315818',
			textDecoration: 'line-through'
		}

		var itemStyle = item.status === 0 ? unfinish : finish;
		
		return (
			<li key={item.id} style={itemStyle}>

				<input type="checkbox" 
					onClick={this.handleFinished.bind(this)} 
					id={item.id}
					className="check-btn" />
				<span>{ item.name }</span>
				<span onClick={this.handleDelete.bind(this)} className="delete-btn">删除</span>
			</li>
		);
	}
}