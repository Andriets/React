import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import MyItem from "./components/MyItem"
import MovieTabs from "./components/MovieTabs"
import Pagination from "./components/Pagination"

function Image(props) {
  return <img width="300px" src={props.src} alt="" />;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      currPage: 1,
      total_pages: 500
    };
  }

  getMovies = () => {
  	fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6fd9b47c59d1c29c0ddefbe5cec4650e&sort_by=${this.state.sort_by}&page=${this.state.currPage}`)
  	.then(response => {
  		return response.json();
  	}).then( data => {
  		this.setState({
  			movies: data.results,
  			total_pages: data.total_pages
  		});
  	});
  };

  componentDidMount() {
  	this.getMovies();
  };

  componentDidUpdate(prevProps, prevState) {
  	if (prevState.sort_by !== this.state.sort_by) {
  		this.getMovies();
  	}
  };

  changePage = newpage => {
  	console.log(newpage)
  	this.setState({
  		currPage: newpage
  	});
  	this.getMovies();
  };

  deleteMovie = movie => {
  	const updateMovies = this.state.movies.filter(function(item){
  		return item.id !== movie.id;
  	});

  	this.setState({
  		movies: updateMovies
  	});
  };

  

  addMovieToWillWatch = movie => {
  	// const updateMoviesWillWatch = [...this.state.moviesWillWatch];
   //  updateMoviesWillWatch.push(movie);

  	const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

  	this.setState({
  		moviesWillWatch: updateMoviesWillWatch
  	});
  };

  deleteMovieFromWillWatch = movie => {
  	const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item){
  		return item.id !== movie.id;
  	});

  	this.setState({
  		moviesWillWatch: updateMoviesWillWatch
  	});
  };

  updateSortBy = value => {
  	this.setState({
  		sort_by: value
  	});
  };


  render() {
    return (
      <div className={"container"}>
        <div className={"row mt-4"}>
          <div className={"col-9"}>
            <div className="row mb-4">
            	<div className="col-12">
            		<MovieTabs 
            			sort_by={this.state.sort_by}
            			updateSortBy={this.updateSortBy}/>
            	</div>
            </div>
            <div className={"row"}>
                      {this.state.movies.map(movie => {
                      	return (
                          <div className={"col-6 mb-4"} key={movie.id}>
                               <MyItem 
                            			movie={movie} 
                            			deleteMovie={this.deleteMovie}
                            			addMovieToWillWatch={this.addMovieToWillWatch}
                            			deleteMovieFromWillWatch={this.deleteMovieFromWillWatch}/>
                          </div>
                          );
                      })}
            </div>
            <Pagination 
          		currPage={this.state.currPage} 
          		total_pages={this.state.total_pages}
          		changePage={this.changePage}/>
          </div>
          <div className={"col-3"}> 
          	<p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div> 
        </div>
      </div>
    );
  }
}

export default App

ReactDOM.render(<App />, document.getElementById("root"));
