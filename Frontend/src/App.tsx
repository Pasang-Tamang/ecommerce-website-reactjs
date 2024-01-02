
import {Routes, Route} from "react-router-dom"
import Login from './pages/auth/Login/Login'
import SignUp from './pages/auth/SignUp/SignUp'

import {ToastContainer} from "react-toastify"
import { Products } from "./pages/admin/products"

function App() {
 

  return (
    <>
    <Routes>
   <Route path='/' element={<Login/>}> </Route>
   <Route path='/signup' element={<SignUp/>}></Route>
   <Route path='/products' element={<Products/>}/>

   
    </Routes>

    

<ToastContainer  />
    </>
  )
}

export default App
