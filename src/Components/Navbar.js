import React, { useContext, useEffect, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useCart from '../hook/useCart';
import Modal from './Modal';
import Profile from './Profile';

const Navbar = () => {
    const [isSticky,setSticky]=useState(false);



    const {user} = useContext(AuthContext)
    //console.log(user);

    const [cart,refetch] = useCart();

    console.log(cart);







    //Handling the scroll

    useEffect(()=>{

      const handleScroll=()=>{
        const offSet = window.scrollY;
        if(offSet>0){
          setSticky(true);
        }
        else{
          setSticky(false);
        }
      }
      window.addEventListener("scroll",handleScroll);
      return()=>{
        window.addEventListener("scroll",handleScroll)
      }

    },[])
    const navItems = (
        <>
        <li><a href='/'>Home</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li><a href='/menu'>All</a></li>
            {/*<li><a>Pizza</a></li>
            <li><a>Pasta</a></li>*/}
            
          </ul>
        </details>

      </li>
      <li tabIndex={0}>
      <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li><a>Online Order</a></li>
            <li><a>Dine in</a></li>
            <li><a>Order Tracking</a></li>
            
          </ul>
        </details>





      </li>
      <li><a>Offers</a></li>





        
        </>
    )
  return (
    <header className='max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-400 ease-in-out'>
 
        <div className={'navbar xl:px-30 ${isSticky? "shadow-md bg-base-100 transition-all duration-400 ease-in-out":""}'}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
            </ul>
        </li>
        <li><a>Item 3</a></li>
          
      </ul>
    </div>
    <a href = "/" >
        
        <img src='log.png' height={50} width={50} alt='logo'/>
        </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">

    {/* search button */}
  <button className="btn btn-ghost btn-circle hidden lg:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>




    {/* carts item */}


    <Link to="cart-page">

  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-3 lg:flex hidden flexitems-center justify-center ">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{cart.length || 0}</span>
        </div>
      </div>
      </Link>



    {/*login btn */}
    {
      user? (<><Profile user={user}/></>):(<button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn bg-blue rounded-full px-6 text-white flex items-center gap-2"><FaRegUser />Login</button>
    )}



    {/*<button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn bg-blue rounded-full px-6 text-white flex items-center gap-2"><FaRegUser />Login</button>*/}
    <Modal/>





  </div>
</div>

        
    </header>
  )
}

export default Navbar
