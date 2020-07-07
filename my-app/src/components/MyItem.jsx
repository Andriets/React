import React from "react"

const MyItem = props => {
	return (
			<div>
        		<p>{props.person.name}</p>
       			<button type="button" onClick={props.removePerson.bind(null, props.person)}>
       			  Delete person
       			</button>
       		</div>
		);
};

export default MyItem