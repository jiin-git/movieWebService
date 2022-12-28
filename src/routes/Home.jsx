import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "./Routes.module.css";

const Home = memo(() => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c53fa26a379c47e9162339ed4dd75237&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2022&https://api.themoviedb.org/3/discover/movie?api_key=c53fa26a379c47e9162339ed4dd75237&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2022&vote_count.gte=100&vote_average.gte=8.0&with_watch_monetization_types=flatrate&vote_average.gte=7.0&with_watch_monetization_types=flatrate&language=ko-KR`);
        const json = await response.json();
        setMovies(json.results);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div id="home">
            <h1 className={styles.movie_title_container}>
                <Link to="/" className={styles.movie_title}>Top 20 Popular Movies (2022)</Link>
            </h1>
            {loading ? <h3>Loading...</h3> : 
            <div className={styles.movie_container}>
                <div className={styles.movie_contents}>
                    {movies.map((movie) => 
                            <Movie 
                                key={movie.id} 
                                movieInfo={movie}/>
                    )}
                </div>
            </div>}
        </div>
    );
});

export default Home;
