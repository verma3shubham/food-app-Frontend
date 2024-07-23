import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

const Profile = ({user}) => {
    const {logout} = useContext(AuthContext);
    const handleLogout=()=>{
        logout().then((result)=>{

        
            alert("logout");
        })

    };
  return (
    <div className="drawer drawer-end z-index-1">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full  ">
            {
                user.photoURL ? (

                    <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL} />

                ) : (
                    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fprofile%2520icon&psig=AOvVaw09rMOraZuHe0SEFLi2oxlv&ust=1721374357574000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiZhrWJsIcDFQAAAAAdAAAAABAE'/>
                )
            }
         
        </div>
        </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a href='/update-profile'>Profile</a></li>
      <li><a >Orders</a></li>
      <li><a>Setting</a></li>
      <li><a onClick={handleLogout}>LogOut</a></li>
    </ul>
  </div>
</div>
  )
}

export default Profile
