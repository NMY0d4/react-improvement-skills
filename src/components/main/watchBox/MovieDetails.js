function MovieDetails({ selectedId, onCloseMovie }) {
  return (
    <div className='details'>
      <button className='btn-back' onClick={onCloseMovie}>
        x
      </button>
      {selectedId}
    </div>
  );
}

export default MovieDetails;
