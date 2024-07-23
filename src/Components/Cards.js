import React, { useContext, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthProvider';

const Cards = ({item}) => {
  const {name,image,price,recipe,_id}=item;
  const [isHeartFilled,setHeartFilled] = useState(false);
  const {user} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item)=>{
    //console.log("add to cart clokced",item);
    if(user && user?.email){
      const cartItem = {menuItem:_id,name,quantity:1,image,price,email:user.email};
      //console.log(cartItem);
      fetch("http://localhost:3001/carts",
        {
          method:"POST",
          headers:{
            'content-type':"application/json"
          },
          body: JSON.stringify(cartItem)
        }

      )
      .then((res)=>res.json()).then((data)=>{
        if(data.insertedId){
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Item added to the cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        //console.log(data);
      });
    }
    else{
      Swal.fire({
        title: "Please Login/SignUp...",
        text: "You won't be able to add items to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login/SignUp"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signup',{state:{from:location}})
          
        }
      });
    }
  };




  const handleHeartClick=()=>{
    setHeartFilled(!isHeartFilled);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className={'rating gap-1 absolute right-2 top-2 p-4 heartStar bg-yellow rounded-full ${isHeartFilled ? "text-rose-500" : "text-white"}'}
      onClick={handleHeartClick}
      > 
        <FaHeart className="h-5 w-5 cursor-pointer"/>
      </div>
      <Link to = {'/menu/${item.id}'}>
  <figure>
    <img
      src={item.image}
      alt="food" className='hover:scale-105 transition-all duration-200 md:h-52 gap-10 rounded-lg mt-3'/>
  </figure>
  </Link>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <Link to = {'/menu/${item.id}'}>
    
    </Link>
    <p>{item.recipe}</p>
    <div className="card-actions justify-between items-center mt-2">
        <h5 className='font-semibold'><span className='text-sm text-red'>$</span>{item.price}</h5>
      <button className="btn bg-blue text-white" onClick={()=>handleAddToCart(item)}>Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Cards
