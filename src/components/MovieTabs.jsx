import React from "react"

class MovieTabs extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.sort_by !== this.props.sort_by) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		const {sort_by, updateSortBy} = this.props;

	const handleClick = value => {
		return event => {
			updateSortBy(value);
		};	
	};

	const getClassLink = value => {
		return `nav-link ${sort_by === value ? "active" : ""}`;
	};

	return (
		<ul className="tabs nav nav-pills">
			<li className="nav-item">
				<div 
					className={getClassLink("popularity.desc")}
					onClick={handleClick("popularity.desc")}
					Style={"cursor: pointer"}
				>
				Popularity desc
				</div>
			</li>
			<li className="nav-item">
				<div 
					className={getClassLink("revenue.desc")}
					onClick={handleClick("revenue.desc")}
					Style={"cursor: pointer"}
					>
				Revenue desc
				</div>
			</li>
			<li className="nav-item">
				<div 
					className={getClassLink("vote.desc")}
					onClick={handleClick("vote.desc")}
					Style={"cursor: pointer"}
				>
				Vote desc
				</div>
			</li>
		</ul>
		)
	}
}


export default MovieTabs