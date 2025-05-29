import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    
    const movies = [
        { id: 1, Title: "Inception", release_date:"2020"},
        { id: 2, Title: "Iron Man", release_date:"2022"},
        { id: 3, Title: "AquaMan", release_date:"2023"},
        { id: 4, Title: "Captain America", release_date:"2024"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery);
        setSearchQuery("");
    }
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movie..." 
                className="search-input" value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(
                    (movie) => 
                    movie.Title.toLowerCase().startsWith(searchQuery) && 
                    (<MovieCard movie={movie} key= {movie.id}/>

                    )
                )}

            </div>
            </div>
    );


}

export default Home;