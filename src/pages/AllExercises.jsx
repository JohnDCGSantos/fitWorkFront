import { useEffect, useState } from 'react'
import '../App.css'
import '../Index.css'
import ExerciseCard from '../components/ExerciseCard'
import SearchExercises from '../components/SearchExercises'
import ExerciseDetails from './ExerciseDetails'

const AllExercises = () => {
  const [exercises, setExercises] = useState([])
  const [searchExercises, setSearchExercises] = useState('')

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
  }

  useEffect(() => {
    fetchExercises()
  }, [])

  // Filter exercises based on name and level criteria

  return (
    <>
      <h1>All exercises</h1>
      <div>
        <SearchExercises
          searchExercises={searchExercises}
          setSearchExercises={setSearchExercises}
        />
      </div>

      <div className='exercise-container'>
        {exercises.length === 0 ||
        (exercises.filter(filteredExercise =>
          filteredExercise.name.toLowerCase().includes(searchExercises.toLowerCase())
        ).length === 0 &&
          searchExercises.length > 0) ? (
          <p>No exercises found</p>
        ) : (
          exercises
            .filter(filteredExercise =>
              filteredExercise.name.toLowerCase().includes(searchExercises.toLowerCase())
            )
            .map(exercise => <ExerciseCard key={exercise._id} exercise={exercise} />)
        )}
        
      </div>
    </>
  )
}

export default AllExercises
