import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-grey xl:px-24 py-10 px-4 text-base-content p-10">
  <aside>
    <img src='log.png' alt='' className=' h-14 w-14'/>
    <p className='my-5 md:w-40'>
      <div className='text-dark font-semibold'><div className='font-bold'>SSA</div> 
      Āhāravahana Sevā</div>
      
      Providing reliable tech and food since 2002
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>





<footer className="footer footer-center bg-grey text-primaryBG-content p-4 px-24 py=10">
  <aside>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by SSA Pvt.Ltd</p>
  </aside>
</footer>



    </div>
  )
}

export default Footer
