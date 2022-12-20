import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            {loading ? <h3>Loading...</h3> : 
            <div>
                {movies.map((movie) => 
                        <Movie 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            coverImg={movie.medium_cover_image}
                            rating={movie.rating}
                            genres={movie.genres}
                            year={movie.rating}/>
                )}
            </div>
            }
            
        </div>
    );
}

export default Home;
