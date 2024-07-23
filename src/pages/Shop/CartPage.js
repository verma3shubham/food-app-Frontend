import React, { useContext, useState } from 'react';
import useCart from '../../hook/useCart';
//import {} from "react-icons"
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';
const CartPage = () => {
    const [cart, refetch] = useCart();
    const {user} = useContext(AuthContext);

    const [cartItems, setCartItems] = useState([]);

    //calculate price
    const calculatePrice = (item)=>{
        return item.price*item.quantity;
    }

    //handle decrease function
    const handleDecrease=(item)=>{
       // console.log(item._id);
       if(item.quantity>1){

       
       fetch(`http://localhost:3001/carts/${item._id}`,
        {method:"PUT",
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        },
        body:JSON.stringify({quantity : item.quantity-1})
       }).then((res) =>res.json()).then((data) =>{
        const updateCart = cartItems.map((cartItem)=>{
            if(cartItem.id===item.id){
                return {...cartItem,
                    quantity:cartItem.quantity -1
                }
            }
            return cartItem
        })
        refetch();
        setCartItems(updateCart);
       });
       refetch();

    }
    else{
        alert("Item cannot be Zero");
    }
    refetch();
    }

//handle increase function
    const handleIncrease=(item)=>{
       // console.log(item._id);
       fetch(`http://localhost:3001/carts/${item._id}`,
        {method:"PUT",
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        },
        body:JSON.stringify({quantity : item.quantity+1})
       }).then((res) =>res.json()).then((data) =>{
        const updateCart = cartItems.map((cartItem)=>{
            if(cartItem.id===item.id){
                return {...cartItem,
                    quantity:cartItem.quantity +1
                }
            }
            return cartItem
        })
        refetch();
        setCartItems(updateCart);
       });
       refetch();

    }


    //handledelete
    const handleDelete = (item)=>{

        Swal.fire({
            title: "Are you sure you want to delete ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:3001/carts/${item._id}`,{method:"DELETE"}).then(res=>res.json()).then(data=>{
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted",
                        text: "Item has been deleted",
                        icon: "success"
                    })
                }
             })
            }
          });

    };



    //calculating the total amt
    const cartSubTotal = cart.reduce((total,item)=>{
        return total + calculatePrice(item);

    },0);


    const orderTotal = cartSubTotal;






  return (
    <div className='section-container '>
    <div className=' bg-gradient-to-r  from-red from-65% to-123%'>
       <div className='py-20 flex flex-col  justify-between items-center gap-8'>
        {/*texts stuff*/}
      <div className=' space-y-8 px-4'>
      <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Items Added to the  <span className='text-green'>Food</span> ever</h2>
      
      </div>
      
      
    </div>
    </div>
    {/* table for the cart */}

    <div>

    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-green '>
      <tr>
        
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
        {/*<th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>*/}
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td className='font-medium'>{item.name}</td>
        <td><button className='btn btn-xs' onClick={()=> handleDecrease(item)}>-</button>
            <input type="number" value={item.quantity} onChange={()=>console.log(item.quantity)} className='w-10 mx-2 text-center overflow-hidden appearance-none'/>
            <button className='btn btn-xs' onClick={()=> handleIncrease(item)}>+</button>
        </td>
        {/*<td>{item.quantity}</td>*/}
        <td>${calculatePrice(item).toFixed(2)}</td>
        <th>
          <button className="btn btn-ghost text-dark " onClick={()=>handleDelete(item)}><FaTrash /></button>
        </th>
      </tr>
      
        ))
      }
      
      
    </tbody>
    {/* foot */}
    <tfoot>
      {/*<tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>*/}
    </tfoot>
  </table>
</div>





    </div>
    {/* customer details */}
    <div className='my-12 flex flex-col md:flex-row justify-between items-start'>
    <div className='md:w-1/2 space-y-3'>
    <h3 className='font-medium'>Customer Details</h3>
    <p>Name:{user.displayName}</p>
    <p>Email:{user.email}</p>
    <p>User _id:{user.uid}</p>
    </div>
    <div className='md:w-1/2 space-y-3'>

    <h3 className='font-medium'>Shopping Details</h3>
    <p >Total Items: <span className='text-red'>{cart.length}</span></p>

    <p >Total Price: <span className='text-red'>${orderTotal.toFixed(2)}</span></p>

    <button className='btn bg-green text-dark'>Proceed to check out</button>


    
    
    </div>
    </div>
    </div>
  )
}

export default CartPage
