import React from "react"

class MyItem extends React.Component {
	constructor() {
		super();

		this.state = {
			like: false
		};
	}

	render() {
	const {person, removePerson, addPersonToLikes, removePersonFromLikes} = this.props;
		return (
			<div className="card">
				<img 
					className="card-img-top h-500"
					src={person.photo}
					alt=""
				/>
				<div className="card-body">
					<h6 className="card-title">{person.name}</h6>
	       			<div className="d-flex justify-content-between align-item-center">

		       			<button 
		       				type="button" 
		       				onClick={removePerson.bind(null, person)}>
		       			  		Delete person
		       			</button>
		       			<button 
		       				type="button" 
		       				className={this.state.like ? "btn btn-success" : "btn btn-secondary"}
		       				onClick={ () => {
			       					this.setState({
			       						like: !this.state.like
			       					});

			       					this.state.like ? removePersonFromLikes(person) : addPersonToLikes(person)
		       					}
		       				}>
		       			  		Like
		       			</button>
		       		</div>
		       	</div>
       		 </div>
		);
	}

}



// const MyItem = props => {

// 	// cosnt { person, removePerson, addPersonToLikes } = props;
// 	return (
// 			<div className="card">
// 				<img 
// 					className="card-img-top h-500"
// 					src={props.person.photo}
// 					alt=""
// 				/>
// 				<div className="card-body">
// 					<h6 className="card-title">{props.person.name}</h6>
// 	       			<div className="d-flex justify-content-between align-item-center">

// 		       			<button 
// 		       				type="button" 
// 		       				onClick={props.removePerson.bind(null, props.person)}>
// 		       			  		Delete person
// 		       			</button>
// 		       			<button 
// 		       				type="button" 
// 		       				onClick={props.addPersonToLikes.bind(null, props.person)}>
// 		       			  		Like
// 		       			</button>
// 		       		</div>
// 		       	</div>
//        		</div>
// 		);
// };

export default MyItem