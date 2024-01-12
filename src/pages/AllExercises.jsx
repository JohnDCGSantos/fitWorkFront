import { useEffect, useState } from 'react'
import '../App.css'
import '../Index.css'
import SearchInput from '../components/SearchInput'
import ExerciseList from '../components/ExerciseList'

const AllExercises = () => {
  const [exercises, setExercises] = useState([])
  const [searchExercises, setSearchExercises] = useState('')
  const [sortCriteria, setSortCriteria] = useState('name')
  const [isLoading, setIsLoading] = useState(true)

  const fetchExercises = async () => {
    try {
      const response = await fetch('http://localhost:5005/exercises')

      if (response.status === 200) {
        const parsed = await response.json()
        setExercises(parsed)
      } else {
        console.error('Error fetching exercises:', response.status)
      }
    } catch (error) {
      console.error('Error fetching exercises:', error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchExercises()
  }, [])

  const handleSortChange = event => {
    setSortCriteria(event.target.value)
  }

  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchExercises.toLowerCase())
  )

  return (
    <>
      <h1>Exercises</h1>
      <div className='searchSort'>
        <SearchInput searchExercises={searchExercises} setSearchExercises={setSearchExercises} />
        <div className='sort'>
          <label className='sortLabel' htmlFor='sortCriteria'>
            Sort by:
          </label>
          <select
            className='sortSearch'
            id='sortCriteria'
            onChange={handleSortChange}
            value={sortCriteria}
          >
            <option value='name'>Name</option>
            <option value='force'>Force</option>
            <option value='level'>Level</option>
            <option value='mechanic'>Mechanic</option>
            <option value='equipment'>Equipment</option>
            <option value='primaryMuscles'>Primary Muscles</option>
            <option value='category'>Category</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ExerciseList exercises={filteredExercises} sortCriteria={sortCriteria} />
      )}
    </>
  )
}

export default AllExercises
