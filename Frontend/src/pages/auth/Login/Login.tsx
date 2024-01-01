
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {Formik} from "formik";
import  * as Yup from "yup";
import { AuthInterface } from "../../../interface/auth.interface";
import { postData } from "../../../services/axios.service";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const navigate = useNavigate()

  const initialValues = {
    email:"",
    password:"",
  }
  const authValidationSchema = Yup.object().shape({
    email:Yup.string().email().required("Email is Required"),
    password:Yup.string().min(8, "Password should be 8 char long").max(12, "Password should be 12 char long max").required('Password is Required')
  })
  
  const loginHandler = async (values:AuthInterface) => {
  
    console.log("values", values)

    const response = await postData('/auth/login', values)
    console.log(response)

    if(response.status === "success"){
      console.log("User Logged in Successfully")
      navigate("/products")
    }
    
  }
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
            LOGIN
          </h2>
    <Formik initialValues={initialValues } validationSchema={authValidationSchema} onSubmit={loginHandler} >

      {
        ({handleSubmit, handleChange, touched, errors, handleBlur}) => (
          <form onSubmit={handleSubmit}>
                  <div className="flex flex-column items-center justify-center">
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
                className=" text-white border-b border-gray-500 focus-within:border-white "
                style={{ fontSize: "15px", fontFamily: "serif" }}
                disableUnderline
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
            
                endAdornment={
                  <InputAdornment position="end">
                    <EmailIcon
                      className="text-white"
                      style={{ fontSize: "20px" }}
                    />
                  </InputAdornment>
                }
              />

              <span className="text-blue-500">{touched.email && errors.email}</span>
            </FormControl>
            <FormControl sx={{ m: 1.5, width: "35ch" }} variant="standard">
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
                onBlur={handleBlur}
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
              <span className="text-blue-500">{touched.password && errors.password}</span>
            </FormControl>
            <button type="submit" className="text-white rounded-full bg-blue-500 hover:bg-blue-700 mt-5 w-80  p-2 font-serif">
              LOGIN
            </button>
          </div>
          <div className="flex mt-4 justify-center items-center font-serif">
            <div className="text-sm">
              <span className="  me-5 mt-4">
                <a href="" className="text-white ">
                  Forgot Password ?
                </a>
              </span>
            </div>
            <div className=" text-white text-xs">
              <span>
                Don't Have An Account? <a href="/signup">SignUp</a>
              </span>
            </div>
          </div>
          </form>
        )
      }
      
    </Formik>
        </div>
      </div>
    </>
  );
};
export default Login;
