import { Link } from 'react-router-dom'
const ExerciseCard = ({ exercise }) => (
  <div className='exercise-card'>
    <Link to={`/exercises/${exercise._id}`}>
      <div className='card-title'>{exercise.name}</div>
    </Link>
    <div className='card-images'>
      {/*{exercise.primaryMuscles}*/}
      {exercise.images.map((image, index) => (
        <img
          className='exerciseImages'
          key={index}
          src={`http://localhost:5005/images/${image}`}
          alt={exercise.name}
        />
      ))}
    </div>
  </div>
)

export default ExerciseCard
