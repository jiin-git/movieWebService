import { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = memo((props) => {
    const { movieInfo } = props;
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMovie(movieInfo);
        setLoading(false);
    }, []);

    return (
        <div>
            {loading ? <h2>Loading..</h2> : 
                <div className={styles.movie_container}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                    <div className={styles.movie_description_container}>
                        <h3><Link to={`/movie/${movie.id}`} className={styles.movie_title}>{movie.title}</Link></h3>
                        <ul className={styles.movie_description}>
                            <ul>개봉일: {movie.release_date}</ul>
                            <ul>평점: {movie.vote_average}점</ul>
                            <ul>인기도: {movie.popularity}</ul>
                            <ul>줄거리: {
                                movie.overview.length > 170? movie.overview.substring(0, 170) + " ..." : 
                                (movie.overview.length === 0 ? "(준비중입니다.)" : movie.overview)}
                            </ul>
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
});

export default Movie;