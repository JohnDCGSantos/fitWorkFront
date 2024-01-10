import './App.css'
import { Routes, Route } from 'react-router-dom'
import AllExercises from './pages/AllExercises'
import ExerciseDetails from './pages/ExerciseDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Hoe Page</h1>} />
        <Route path='/exercises' element={<AllExercises />} />
        <Route path='/exercises/:exerciseId' element={<ExerciseDetails />} />
      </Routes>
    </>
  )
}

export default App
