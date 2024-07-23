import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const UpdateProfile = () => {

  const {updateUserProfile} = useContext(AuthContext)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const location = useLocation();
  const navigate =useNavigate();
  const from = location.state?.from?.pathname || "/";
  





  const onSubmit = data => {
    const name = data.name;
    const photoURL = data.photoURL;
    updateUserProfile(name,photoURL).then(()=>{

      //navigate(from,{replace:true});


    }).catch((error)=>{

    })
  }




  return <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Update Profile!</h1>
      <p className="py-6">
      "Give your profile a makeover and let it shine—update it now!"
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required {...register("name")} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input {...register("photoURL")}  type="text" placeholder="photoURL" className="input input-bordered" required />
          {/*<label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>*/}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue text-white">Update Profile</button>
        </div>
      </form>
    </div>
  </div>
</div>
    

  
    
      
    
  
}

export default UpdateProfile
