const SearchExercises = ({ SearchExercises, setSearchExercises }) => {
  return (
    <>
      <div className='search'>
        Search exercise:{' '}
        <input
          type='text'
          value={SearchExercises}
          onChange={event => setSearchExercises(event.target.value)}
        />
      </div>
    </>
  )
}

export default SearchExercises
