const SearchInput = ({ searchExercises, setSearchExercises }) => {
  return (
    <div className='search'>
      <div className='searchLabel'>Search exercise:</div>
      <div>
        <input
          className='inputSearch'
          type='text'
          value={searchExercises}
          onChange={event => setSearchExercises(event.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchInput
