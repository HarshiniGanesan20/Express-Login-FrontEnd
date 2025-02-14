import { useState } from 'react'
import google from './assets/gicon.webp'
import './App.css'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [uname, setUname] = useState("")
  const [pass, setPass] = useState("")

  const handleUname = (e) => {
    setUname(e.target.value)
  }

  const handlePass = (e) => {
    setPass(e.target.value)
  }

  const check = () => {
   
    // var loginCheck = axios.post("http://localhost:5000/login", { "username": uname, "password": pass })

    var loginCheck = axios.post("https://express-login-backend-production.up.railway.app/login", {
      "username": uname,
      "password": pass
    });


    loginCheck.then((item) => {
      if (item.data == true) {
        toast.success("Login Successful!", {
          position: "top-right",
          autoClose: 2000,
        });
        setUname("");
        setPass("");
      }
      else {
        toast.error("Login Failed! Invalid credentials.", {
          position: "top-right",
          autoClose: 2000,
        });
        setUname("");
        setPass("");
      }
    })
      .catch(() => {
        toast.error("Error logging in. Try again!", {
          position: "top-right",
          autoClose: 2000,
        });
      });
  }


  return (
    <>
      <ToastContainer />
      <div className="bg-[#A78CDE] h-screen w-screen flex justify-center items-center ">
        <div className="bg-white w-full max-w-[300px] md:max-w-[350px] pt-[40px] pr-[30px] pb-[40px] pl-[30px]">

          <h1 className='text-2xl font-semibold mb-1 '>Welcome Back</h1>
          <p className='text-[#737373] font-normal text-[15px] mb-5'>Please enter your details</p>

          <label className="text-[16px] font-normal ">Username</label>
          <input onChange={handleUname} value={uname} className=' w-full p-2 mt-1 border-1 border-gray-300 focus:outline-[#c9b1ffb7] mb-3' type='text' name='username'></input>

          <label className="text-[16px] ">Password</label>
          <input onChange={handlePass} value={pass} className=' w-full p-2 mt-1 border-1 border-gray-300 focus:outline-[#c9b1ffb7] mb-3' type='password' name='password'></input><br></br>

          <p className='text-[#62449D] underline font-medium mb-3 text-[15px] cursor-pointer'>Forgot Password</p>
          <button onClick={check} className='w-full p-2 bg-[#62449D] text-white mb-5 text-[16px] cursor-pointer hover:bg-[#7c64b4]'>Sign in</button>

          <div className='flex p-0 w-full justify-center items-center gap-1.5 border-1 border-gray-300 cursor-pointer '>
            <img className="w-9" src={google}></img>
            <p className='text-[15px] '>Sign in with Google</p>
          </div>

          <div className='flex justify-center items-center mt-5' >
            <p className='text-[#737373] font-medium text-[14px]  '>Don't have an account? <span className='text-[#62449D] font-medium underline text-[14px] cursor-pointer'>Sign Up</span></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
