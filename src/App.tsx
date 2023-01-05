import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bulletin from './components/bulletin/Bulletin'
import Header from './components/layout/Header'
import Test from './components/test/Test'
import SignUp from './components/signup/SignUp'
import Login from './components/login/Login'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Bulletin />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
