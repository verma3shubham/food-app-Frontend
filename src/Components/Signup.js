import React, { useContext } from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";

import {FaGoogle,FaMicrosoft,FaFacebook} from "react-icons/fa";
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';




const Signup = () => {
    
        const { register, handleSubmit, watch, formState: { errors } } = useForm();

        const authContext = useContext(AuthContext);
    const createUser = authContext.createUser;
    const login = authContext.login;

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    
    
        const onSubmit = (data) => {

          const email = data.email;
          const password = data.password;
          createUser(email,password).then((result)=>{

            const user = result.user;
            alert("Account creation successfull");
            document.getElementById('my_modal_5').close();
            navigate(from, { replace:true });


          }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message

          });

        }
    
    
  return (
    <div className='max-w-md bg-grey shadow w-full mx-auto text-center justify-center my-32 rounded-2xl'>
      <div className="modal-action flex flex-col justify-center ">
    <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-bold text-lg text-center'>Create an Account</h1>
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

        {/*signup btn*/}
        <div className="form-control mt-6">
          <input type="submit" value="Signup" className="btn btn-primary"/>
        </div >
        <p className='text-center my-2 '>Already have an Account? Login!{" "} <button  className='underline text-red ml-2' onClick={()=>document.getElementById('my_modal_5').showModal()} >Login!</button>{" "}</p>
        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute">✕</Link>
      </form>

      {/*social media sign in*/}
      <div className='text-center mg-4'>
      <button className="btn btn-circle  h-10 w-10 bg-grey hover:bg-blue hover:text-white  ml-5 mr-5">
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
    <Modal/>
    </div>
  )
}

export default Signup
