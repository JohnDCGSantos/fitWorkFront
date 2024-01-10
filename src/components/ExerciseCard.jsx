import { Link } from 'react-router-dom'
const ExerciseCard = ({ exercise }) => (
  <div className='exercise-card'>
    <Link to={`/exercise/${exercise._id}`}>
      <div className='card-title'>{exercise.name}</div>
      <div className='card-images'>
        {exercise.images.map((image, index) => (
          <img
            className='exerciseImages'
            key={index}
            src={`http://localhost:5005/images/${image}`}
            alt={exercise.name}
          />
        ))}
      </div>
    </Link>
  </div>
)

export default ExerciseCard
