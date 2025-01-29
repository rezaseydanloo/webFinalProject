
import HomePage from './components/Home page/HomePage'
import LoginPage from './components/Register/LoginPage'
import SignInPage from './components/Register/SignInPage'
import { Navigate, Route,Router, Routes } from 'react-router-dom'
import Test from './mocks/Test'

export default function App() {

  return (

    <Routes>
      <Route path='/Test' element={ <Test />}></Route>
       <Route path='/' element={<LoginPage />} ></Route>
      <Route path='/Home' element={<HomePage />} ></Route>
      <Route path='/SignIn' element={<SignInPage />} ></Route>
    </Routes>
      
  )
}


