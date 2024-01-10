
export default function ExercisesDetailsText({exercisesName, exercisesForce, exercisesLevel, exercisesCategory,
    exercisesInstructions }) {

  return (

       <div className='exerciseDetails-text-container'>
<h1>{exercisesName}</h1>
<h3>Movement</h3>
<p>{exercisesForce}</p>
<h3>Level</h3>
<p>{exercisesLevel}</p>
<h3>Category</h3>
<p>{exercisesCategory}</p>
<h2>Instructions
</h2>
<p>{exercisesInstructions}</p>
</div>

   
  )
}
