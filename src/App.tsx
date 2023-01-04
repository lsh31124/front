import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bulletin from './components/bulletin/Bulletin'
import Header from './components/layout/Header'
import Test from './components/test/Test'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Bulletin />} />
      </Routes>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
