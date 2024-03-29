import './employees-list-item.css';

const EmployeesListItem = (props) => {
	const {name, salary, onDelete, onToggleProp, onChangeSalary, increase, like} = props;

	let className = 'list-group-item d-flex justify-content-between';

	if (increase) {
		className += ' increase';
	}

	if (like) {
		className += ' like';
	}

	return (
		<li className={className}>
			<span className="list-group-item-label" 
				  onClick={onToggleProp}
				  data-toggle="like"
				  style={{fontSize: '40pt',  transition: 'all', WebkitTransition: 'all', msTransition: 'all'}}>{name}</span>
			<input type="text" className="list-group-item-input" defaultValue={salary + "$"} onChange={onChangeSalary}/>
			<div className='d-flex justify-content-center align-items-center'>
				<button type="button"
						className="btn-cookie btn-sm"
						onClick={onToggleProp}
						data-toggle="increase">
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button"
						className="btn-trash btn-sm" onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
};

export default EmployeesListItem;