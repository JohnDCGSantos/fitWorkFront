import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiBaseUrl } from '../config';
import '../ExerciseDetails.css'
import ExercisesDetailsText from '../components/ExercisesDetailsText';
import ExercisesDetailsImages from '../components/ExercisesDetailsImages';
export default function ExerciseDetails({ exercise }) {
    const { exerciseId } = useParams()
    const [exercises, setExercises] = useState([])
    const [isLoading, setIsLoading] = useState(false);
  
     useEffect(() => { 
        fetchExerciseData()
      }, [exerciseId])
      
    const fetchExerciseData = async () => {
    try {
      
        const response = await axios.get(`${apiBaseUrl}/exercises/${exerciseId}`)
        const exercise = response.data;
      
        console.log('Ver aqui info dos detalhes do post', exercise);
        setExercises(exercise);
  
    } catch (error) {
        console.log(error)
    }
    setIsLoading(false)
    } 

  return (
    <div className='exerciseDetailsPage-container'>
        <div className='exerciseDetailsPage-subContainer' >
        <ExercisesDetailsText exercisesName ={exercises.name}
         exercisesForce = {exercises.force}
         exercisesLevel = {exercises.level}
         exercisesCategory = {exercises.category}
         exercisesInstructions = {exercises.instructions}
         />
      <ExercisesDetailsImages images={exercises.images} />
    </div>
    </div>
    
  )
}
