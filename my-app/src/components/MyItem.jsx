import React from "react"
// import "./styles.css";

const MyItem = props => {
	return (
			<div className="card">
				<img 
					className="card-img-top h-500"
					src={props.person.photo}
					alt=""
				/>
				<div className="card-body">
					<h6 className="card-title">{props.person.name}</h6>
	       			<div className="d-flex justify-content-between align-item-center">

		       			<button 
		       				type="button" 
		       				onClick={props.removePerson.bind(null, props.person)}>
		       			  		Delete person
		       			</button>
		       		</div>
		       	</div>
       		</div>
		);
};

export default MyItem