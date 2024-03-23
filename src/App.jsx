import { Route, Routes } from 'react-router-dom'
import First from '../Components/Screen';
import Registration from '../Components/Registration';
import Quiz from '../Components/Quiz';
import ScorePage from '../Components/finish';
import LandingPage from '../Components/Landing_Page';
import Teacher_login_page from '../Components/Login';
import SignUpForm from '../Components/Sign_up'
import Profile from '../Components/Profile_Page';


function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Screen' element={<First />} />
        <Route path='/teacher_login' element={<Teacher_login_page />} />
        <Route path='/registraion' element={<Registration />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/sign_up' element={<SignUpForm />} />
        <Route path='/score' element={<ScorePage />} />
      </Routes>

    </>
  )
}

export default App
