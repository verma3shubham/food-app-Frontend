import React, { useContext,useState } from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";

import {FaGoogle,FaMicrosoft,FaFacebook} from "react-icons/fa";
import { AuthContext } from '../contexts/AuthProvider';

const Modal = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //console.log("API Key:",process.env.APIKEY);


    //const [signUpWithGmail] = useContext(AuthContext);
    const authContext = useContext(AuthContext);
    const signUpWithGmail = authContext.signUpWithGmail;
    const login = authContext.login;
    const [errorMessage,setErrorMessage] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = (data) => {
      const email = data.email;
      const password = data.password;
      //console.log(email,password)
      login(email,password).then((result)=>{
        const user = result.user;
        //alert("Login Successful");
        document.getElementById('my_modal_5').close();
        navigate(from,{replace:true});
      }).catch((error)=>{
        const errorMessage = error.message;
        setErrorMessage("provide a correct email and password");
      })
    };

    const handleLogin=()=>{
      signUpWithGmail().then((result)=>{
        const user = result.user;
        alert("Login Successful")

      }).catch((error)=>console.log(error));
    };


  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
  <div className="modal-box bg-grey">
    
    
    <div className="modal-action flex flex-col justify-center -mt-5">
    <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-bold text-lg text-center'>Please Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required {...register("email")}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required {...register("password")}/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/*errors*/}
        {
          errorMessage ? <p className='text-red text-xs'>{errorMessage}</p>: ""
        }

        {/*login btn*/}
        <div className="form-control mt-6">
          <input type="submit" value="Login" className="btn btn-primary"/>
        </div >
        <p className='text-center my-2 '>Don't have an account ?{" "} <Link to="/signup" className='underline text-red ml-2' onClick={()=>document.getElementById('my_modal_5').close()}>SignUp!</Link>{" "}</p>
        <button htmlFor="my_modal_5" onClick={()=>document.getElementById('my_modal_5').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>

      {/*social media sign in*/}
      <div className='text-center mg-4'>
      <button className="btn btn-circle  h-10 w-10 bg-grey hover:bg-blue hover:text-white  ml-5 mr-5" onClick={handleLogin}>
  <FaGoogle/>
</button>

<button className="btn btn-circle  h-10 w-10 bg-grey hover:bg-blue hover:text-white  ml-5 mr-5">
  <FaMicrosoft/>
</button>

<button className="btn btn-circle  h-10 w-10 bg-grey hover:bg-blue hover:text-white  ml-5 mr-5">
  <FaFacebook/>
</button>

      </div>




    </div>
  </div>
</dialog>
  )
}

export default Modal
