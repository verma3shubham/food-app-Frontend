import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from '../contexts/AuthProvider'
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const {user} = useContext(AuthContext);
    const {refetch,data:cart=[]}=useQuery({
        queryKey:['carts',user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3001/carts?email=${user?.email}`);
           return res.json();
          },
    
        
    });
  return [cart,refetch];
};

export default useCart
