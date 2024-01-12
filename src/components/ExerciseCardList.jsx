import ExerciseCard from './ExerciseCard'

const ExerciseCardList = ({ exercises }) => {
  return (
    <div className='exercise-container'>
      {exercises.map(exercise => (
        <ExerciseCard key={exercise._id} exercise={exercise}></ExerciseCard>
      ))}
    </div>
  )
}

export default ExerciseCardList
