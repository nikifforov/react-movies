import { Movie } from "./movie";

function Movies(props) {
    const { movies = [] } = props;
    return (
        <div className="movies">
            {movies.lenght ? (
                <h4>Nothing found</h4>
            ) : (
                movies.map((movie) => <Movie key={movie.id} {...movie} />)
            )}
        </div>
    );
}

export { Movies };
