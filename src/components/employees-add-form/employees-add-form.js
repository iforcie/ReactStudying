import { Component } from 'react';
// import './employees-add-form.css';
import './employees-add-form.scss';

export default class EmployeesAddForm  extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.salary]: e.target.value
		});	
	}

	onSubmit = (e) => {
		e.preventDefault();

		this.props.onAddEmployee(this.state.name, this.state.salary);
		this.setState({
			name: '',
			salary: ''
		})
	}

	render() {
		// const {onAddEmployee} = this.props;
		const {name, salary} = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form 
					className='add-form d-flex'
					onSubmit={this.onSubmit}
					>
					<input type="text" 
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name="name"
						value={name}
						onChange={this.onValueChange}/>
					<input type="number" 
						className="forn-control new-post-label"
						placeholder="З/П в $?" 
						name="salary"
						value={salary}
						onChange={this.onValueChange}/>
	
					<button type="submit"
							className="btn btn-outline-light">Добавить</button>
				</form>
			</div>
		);
	}
};