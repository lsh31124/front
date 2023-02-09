import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Bulletin from './components/bulletin/Bulletin'
import Job from './components/job/Job'
import UserInterest from './components/job/UserInterest'
import Header from './components/layout/Header'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import Test from './components/test/Test'

const App: React.FC = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
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
    </QueryClientProvider>
  )
}

export default App
