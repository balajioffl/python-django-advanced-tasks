import { useEffect, useState } from "react";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [page, setPage] = useState(1);

  const fetchMovies = async (page, search, category, rating) => {
    try 
    {
      let url = `http://127.0.0.1:8000/api/movies/?page=${page}`;

      if (search) url += `&search=${search}`;
      if (category) url += `&category=${category}`;
      if (rating) url += `&rating=${rating}`;

      console.log(url);

      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      console.log("Data received:", data);

      setMovies(data.results || []);
      setNext(data.next);
      setPrevious(data.previous);
    } 
    catch (err) 
    {
      console.error("Fetch error:", err);
      setMovies([]);
      setNext(null);
      setPrevious(null);
    }
  };

  useEffect(() => {
    fetchMovies(page, search, category, rating);
  }, [page, search, category, rating]);

  return (
    <div className="movie-container">
      <h1 >Movie List</h1>

    <div className="filters">
      <input type="text" placeholder="Search movies..." value={search} onChange={(e) => 
      { setPage(1); setSearch(e.target.value); }}
      />

      <select onChange={(e) => { setPage(1); setCategory(e.target.value); }}>
        <option value="">All Categories</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Romance">Romance</option>
        <option value="Comedy">Comedy</option>
      </select>

      <select onChange={(e) => { setPage(1); setRating(e.target.value); }}>
        <option value="">All Ratings</option>
        <option value="6">6 Star</option>
        <option value="7">7 Stars</option>
        <option value="8">8 Stars</option>
        <option value="9">9 Stars</option>
        <option value="10">10 Stars</option>
      </select>

    </div>

        <div className="movies">
        {movies && movies.length > 0 ? (
            movies.map((movie) => (
            <div key={movie.id} className="movie-card">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <small>Category: {movie.category} | Rating: {movie.rating}</small>
            </div>
            ))
        ) : (
            <p>No movies found.</p>
        )}
        </div>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={!previous}>Previous</button>
        <button onClick={() => setPage(page + 1)} disabled={!next}>Next</button>
      </div>
    </div>
  );
}

export default MovieList;
