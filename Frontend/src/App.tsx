
import './App.css'
import {Routes, Route} from "react-router-dom"
import Login from './pages/auth/Login/Login'
import SignUp from './pages/auth/SignUp/SignUp'

function App() {
 

  return (
    <>
    <Routes>
   <Route path='/' element={<Login/>}> </Route>
   <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
    </>
  )
}

export default App
