import { useEffect, useState } from 'react';
import NavBar from './components/navbar/NavBar';
import Main from './components/main/Main';
import NumResults from './components/navbar/NumResults';
import Box from './components/main/Box';
import MovieList from './components/main/movieListBox/MovieList';
import WatchedSummary from './components/main/watchBox/WatchedSummary';
import WatchedMoviesList from './components/main/watchBox/WatchedMoviesList';
import Logo from './components/navbar/Logo';
import Search from './components/navbar/Search';
import Loader from './components/ui/Loader';
import ErrorMessage from './components/ui/ErrorMessage';
import MovieDetails from './components/main/watchBox/MovieDetails';
import { useMovies } from './useMovies';
import { useLocalStorageState } from './useLocalStorageState';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  const [watched, setWatched] = useLocalStorageState([], 'watched');

  function handleSelectMovie(id) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem('watched', JSON.stringify([...watched, movie]));
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((w) => w.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main movies={movies} watched={watched}>
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              watchedMovies={watched}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
