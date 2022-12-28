import { useState, useEffect, memo } from 'react';
import styles from "./MovieDetail.module.css";
import RecommendMovies from './RecommendMovies';

const MovieDetail = memo((props) => {
    const { movieInfo } = props;
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        setMovie(movieInfo);
    }, []);

    return (
        <div>
            <div className={styles.movie_container}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                <div className={styles.movie_description_container}>
                    <h3 className={styles.movie_title}>{movie.title} ({movie.original_title})</h3>
                    <ul className={styles.movie_description}>
                        <ul>장르: {movie.genres && movie.genres.map((genre) => {
                            return (
                                    <ul key={genre.id} className={styles.movie_genre}>
                                        {genre.name}
                                    </ul>
                            );
                        })} </ul>
                        <ul>상영시간: {movie.runtime}분</ul>
                        <ul>개봉일: {movie.release_date}</ul>
                        <ul>평점: {parseFloat(movie.vote_average).toFixed(1)}점</ul>
                        <ul>인기도: {movie.popularity}</ul>
                        <ul>줄거리: {movie.overview === undefined ? null : 
                            (movie.overview.length === 0 ? "(준비중입니다.)" : movie.overview)}
                        </ul>
                    </ul>
                </div>
            </div>
            <RecommendMovies id={movie.id}/>    
        </div>
    );
});

export default MovieDetail;