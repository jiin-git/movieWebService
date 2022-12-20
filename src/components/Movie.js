import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = (props) => {

    return (
        <div>
            <h3><Link to={`/movie/${props.id}`}>{props.title}</Link></h3>
            <img src={props.coverImg}/>
            <ul>
                <li>genres: {props.genres}</li>
                <li>rating: {props.rating}</li>
                <li>year: {props.year}</li>
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
}

export default Movie;