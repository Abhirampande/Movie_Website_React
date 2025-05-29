import "../css/MovieCard.css";
import { FaHeart } from "react-icons/fa";

function MovieCard({movie}) {

    function onFavouriteClick(){
        alert("added to watchList")
    }

    
    return (
        <div className="movie-card">
            <div className="movie-poster">
            <img src={movie.url} alt={movie.Title} />
            <div className="movie-overlay">
            <button className="favourite-btn" onClick={onFavouriteClick}>
                <FaHeart />
            </button>
        </div>
        </div>

        <div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
        </div>
       
    
    
    );

}


export default MovieCard;