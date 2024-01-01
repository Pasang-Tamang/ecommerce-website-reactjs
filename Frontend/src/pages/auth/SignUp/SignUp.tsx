import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import FormControl from "@mui/material/FormControl";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

import { postData } from "../../../services/axios.service";
import { useNavigate } from "react-router-dom";
// import { config } from "../../../config";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };


  // const [name, setName] = useState<any>("")
  // const [email, setEmail] = useState<any>("")
  // const [password, setPassword] = useState<any>("")
  // const [confirmPassword, setConfirmPassword] = useState<any>("")

  const [signUpUser, setSignUpUser] = useState<any>({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  
  const navigate = useNavigate()
 

  const handleChange = (e:any) => {

    const {name, value} = e.target
    setSignUpUser((prev:any) => ({
      ...prev, [name]:value
    }))
   // console.log(signUpUser)
    // console.log(e.target.name, e.target.value)

    // if(e.target.name === "name"){
    //   setName(e.target.value)
    // }if(e.target.name === "email"){
    //   setEmail(e.target.value)
    // }if(e.target.name === "password"){
    //   setPassword(e.target.value)
    // }


  
  }

  const handleRegister = async(e:any) => {
    e.preventDefault()
    console.log(signUpUser)

    if(signUpUser.password !== signUpUser.confirmPassword){
        console.log("Password and Cofirm Password must match!!")
    }else{
      const response = await postData("/auth/register" , signUpUser)
      console.log(response)
      
    if(!response.status){
      console.log(response.message)
    }else{
      console.log(response.message)
      navigate('/')
    }
    }

   
    
  }


  // const handleRegister = async (e:any) => {
  // e.preventDefault()
  // console.log("clicked")
  // console.log(name, email, password)
  // const data = {
  //       name,
  //      email, 
  //      password
  // }

  // try {
  //   const response = await axios.post(`${config.SERVER_URL}/auth/register`, data)

  //   console.log(response)
    
  // } catch (error) {
  //   console.log(error)
  // }

  // }

  return (
    <>
      <div
        className="h-screen bg-no-repeat bg-center  flex flex-column items-center justify-center"
        style={{
          background:
            "url('https://images.unsplash.com/photo-1609803223954-12f78b0cc1fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="  w-3/12 shadow-2xl h-4/6">
          <h2 className=" mt-5 text-4xl text-white text-center font-serif font-medium">
            SIGNUP
          </h2>

          <div className="flex flex-column items-center justify-center">
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel
                htmlFor="standard-adornment-email"
                className="text-white "
                style={{ fontSize: "15px", fontFamily: "serif" }}
              >
                Full Name
              </InputLabel>
              <Input
                id="standard-adornment-name"
                type="text"
                className=" text-white border-b border-gray-500 focus-within:border-white "
                style={{ fontSize: "15px", fontFamily: "serif" }}
                name="name"
                onChange={handleChange}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircleIcon
                      className="text-white"
                      style={{ fontSize: "20px" }}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel
                htmlFor="standard-adornment-email"
                className="text-white "
                style={{ fontSize: "15px", fontFamily: "serif" }}
              >
                Email
              </InputLabel>
              <Input
                id="standard-adornment-email"
                type="email"
                name="email"
                className=" text-white border-b border-gray-500 focus-within:border-white "
                style={{ fontSize: "15px", fontFamily: "serif" }}
                onChange={handleChange}

                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <EmailIcon
                      className="text-white"
                      style={{ fontSize: "20px" }}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel
                htmlFor="standard-adornment-password"
                className="text-white "
                style={{ fontSize: "15px", fontFamily: "serif" }}
              >
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                className="text-white outline-none border-b border-gray-500 focus-within:border-white "
                style={{ fontSize: "15px", fontFamily: "serif" }}
                name="password"
                onChange={handleChange}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      className="text-white"
                    >
                      {showPassword ? (
                        <Visibility style={{ fontSize: "20px" }} />
                      ) : (
                        <VisibilityOff style={{ fontSize: "20px" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl> 
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel
                htmlFor="standard-adornment-confirm-password"
                className="text-white "
                style={{ fontSize: "15px", fontFamily: "serif" }}
              >
               Confirm Password
              </InputLabel>
              <Input
                id="standard-adornment-confirm-password"
                type={showPassword ? "text" : "password"}
                className="text-white outline-none border-b border-gray-500 focus-within:border-white "
                style={{ fontSize: "15px", fontFamily: "serif" }}
                name="confirmPassword"
                onChange={handleChange}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      className="text-white"
                    >
                     {showPassword ? (
                        <Visibility style={{ fontSize: "20px" }} />
                      ) : (
                        <VisibilityOff style={{ fontSize: "20px" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />            </FormControl> 

            <button className="text-white rounded-full bg-blue-500 hover:bg-blue-700 mt-5 w-80  p-2 font-serif"
            onClick={handleRegister}>
              SIGNUP
            </button>
          </div>

          <div className="flex mt-4 justify-center items-center font-serif">
            <div className=" text-white text-xs">
              <span>
                Already Have An Account? <a href="/">Login</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
