import './App.css'
import './Index.css'

import { Routes, Route } from 'react-router-dom'
import AllExercises from './pages/AllExercises'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/exercises' element={<AllExercises />} />
      </Routes>
    </>
  )
}

export default App
