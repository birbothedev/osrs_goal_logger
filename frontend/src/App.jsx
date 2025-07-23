import { useLocation } from "react-router-dom"
import './css/App.css'
import { HomePage } from './pages/Home'
import { PlayerGoalPage } from './pages/PlayerGoalPage'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/playergoalpage" element={<PlayerGoalPage />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
