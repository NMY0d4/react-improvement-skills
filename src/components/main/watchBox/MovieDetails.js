import { useEffect, useState } from 'react';
import Loader from '../../ui/Loader';
import ErrorMessage from '../../ui/ErrorMessage';
import StarRating from '../../starRating/StarRating';

function MovieDetails({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    Title: title,
    Year: year,
    Rated: rated,
    Released: released,
    Runtime: runtime,
    Plot: plot,
    Poster: poster,
    Actors: actors,
    Director: director,
    Genre: genre,
    imdbRating,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setError('');
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${selectedId}`
        );

        if (!res.ok) {
          throw new Error('Something went wrong with fetching movies');
        }
        const data = await res.json();

        if (data.Response === 'False') throw new Error('Movie not found');
        setMovie(data);
        // console.log(data);
      } catch (err) {
        console.error(`ICI ---> ${err.message}`);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [selectedId]);

  return (
    <div className='details'>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <>
          <header>
            <button className='btn-back' onClick={onCloseMovie}>
              x
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className='details-overview'>
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> {imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className='rating'>
              <StarRating maxRating={10} size={24} />
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
