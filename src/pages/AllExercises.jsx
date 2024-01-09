import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllExercises = () => {
  const [exercises, setExercises] = useState([])

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

  return (
    <>
      <h1>All exercises</h1>
      {exercises.map(exercise => (
        <Link key={exercise._id}>
          <p>{exercise.name}</p>
          <p>{exercise.category}</p>
          {exercise.images && exercise.images.length > 0 && (
            <div>
              {exercise.images.map((image, index) => (
                <img key={index} src={exercise.images} alt={`Exercise ${image} - Image ${index}`} />
              ))}
            </div>
          )}
        </Link>
      ))}
    </>
  )
}
export default AllExercises
