import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bulletin from './components/bulletin/Bulletin'
import Header from './components/layout/Header'
import Test from './components/test/Test'
import SignUp from './components/signup/SignUp'
import Login from './components/login/Login'
import Job from './components/job/Job'
import UserInterest from './components/job/UserInterest'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Bulletin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job" element={<Job />} />
        <Route path="/job/userinterest" element={<UserInterest />} />
      </Routes>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
