import React from "react"

class MyItem extends React.Component {
	constructor() {
		super();

		this.state = {
			willWatch: false
		};
	}

	render() {
	const {movie, deleteMovie, addMovieToWillWatch, deleteMovieFromWillWatch} = this.props;
		return (
			<div className="card">
				<img 
					className="card-img-top"
					src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
					alt=""
				/>
				<div className="card-body">
					<h6 className="card-title">{movie.title}</h6>	
	       			<div className="d-flex justify-content-between align-item-center">
	       				<p className="mb-0">Rating: {movie.vote_average}</p>
		       			<button 
		       				type="button" 
		       				onClick={deleteMovie.bind(null, movie)}>
		       			  		Delete movie
		       			</button>
		       			<button 
		       				type="button" 
		       				className={this.state.willWatch ? "btn btn-success" : "btn btn-secondary"}
		       				onClick={ () => {
			       					this.setState({
			       						willWatch: !this.state.willWatch
			       					});

			       					this.state.willWatch ? deleteMovieFromWillWatch(movie) : addMovieToWillWatch(movie)
		       					}
		       				}>
		       			  		Will Watch
		       			</button>
		       		</div>
		       	</div>
       		 </div>
		);
	}

}

export default MyItem