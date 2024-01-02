
import './App.css'
import {Routes, Route} from "react-router-dom"
import Login from './pages/auth/Login/Login'
import SignUp from './pages/auth/SignUp/SignUp'
import Product from './pages/admin/products'
import {ToastContainer} from "react-toastify"

function App() {
 

  return (
    <>
    <Routes>
   <Route path='/' element={<Login/>}> </Route>
   <Route path='/signup' element={<SignUp/>}></Route>
   <Route path='/products' element={<Product/>}/>

   
    </Routes>

    

<ToastContainer  />
    </>
  )
}

export default App
