import { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import styles from "./RecommendMovie.module.css";

const RecommendMovies = memo((props) => {
    const [recommendMovies, setRecommendMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getRecommend = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${props.id}/recommendations?api_key=c53fa26a379c47e9162339ed4dd75237&language=ko-KR&page=1`);
        const json = await response.json();
        setRecommendMovies(json.results);
        setLoading(false);
    }

    useEffect(() => {
        { props.id && getRecommend() }
    }, [props.id]);

    return(
        <div className="recommend">
            <h2 className={styles.recommend_title}>이런 영화는 어떠세요?</h2>
            <ul className="recommend_lists">
                {loading ? null : 
                (recommendMovies.length ? recommendMovies.map((movie) => 
                    !movie.adult && (movie.vote_average > 6.0) && (movie.popularity > 200) &&
                        (<div key={movie.id} className={styles.movie_container}>
                        <img className={styles.movie_poster} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                        <div className={styles.movie_description_container}>
                            <h3><Link to={`/movie/${movie.id}`} className={styles.movie_title}>{movie.title}</Link></h3>
                            <ul className={styles.movie_description}>
                                <ul>개봉일: {movie.release_date}</ul>
                                <ul>평점: {movie.vote_average}점</ul>
                                <ul>인기도: {movie.popularity}</ul>
                            </ul>
                        </div>
                    </div>)
                ) : <h3 className={styles.recommend_content}>준비중입니다.</h3>)}
            </ul>
        </div>
    );
});

export default RecommendMovies;