import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Routes.module.css";

const Detail = () => {
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c53fa26a379c47e9162339ed4dd75237&language=ko-KR`)
        ).json();
        setMovie(json);
    }

    useEffect(() => {
        getMovie();
    }, []);

    useEffect(() => {
        getMovie();
    }, [id]);

    return (
        <div id="details">
            <h1 className={styles.movie_title_container}>
                <Link to="/" className={styles.movie_title}>Top 20 Popular Movies (2022)</Link>
            </h1>
            <div className={styles.movie_container}>
                <div className={styles.movie_contents}>
                    <MovieDetail
                            key={movie.id}
                            movieInfo={movie}/> 
                </div>
            </div>
        </div>
    );
}

export default Detail;