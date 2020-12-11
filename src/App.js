import axios from "axios";
import React from "react";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }
  //axios는 시간이 걸리기 때문에 await로 기다려준다.
  //ex) data.data.movies경우 {data:{data:{movies}}} 로 단축
  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //state에 새로운 요소를 하나 만들수있다.
    this.setState({movies, isLoading : false});
  };

  componentDidMount(){
   this.getMovies();
  };   

  render() {
    const { isLoading, movies} = this.state;
    return (
      <section className = "container">
        {isLoading ? (
          <div className = "loader">
            <span className = "loader__text">Loading...</span>
          </div>
        )  :  (   
          <div className = "movies">
            {movies.map(movie => (
            <Movie
            key = {movie.id}
            id = {movie.id}
             year = {movie.year}
            title = {movie.title}
            summary = {movie.summary}
            poster = {movie.small_cover_image}
            genres = {movie.genres}
            />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;