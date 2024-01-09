import './App.css'
import { Routes, Route } from 'react-router-dom'
import AllExercises from './pages/AllExercises'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Hoe Page</h1>} />
        <Route path='/exercises' element={<AllExercises />} />
      </Routes>
    </>
  )
}

export default App
