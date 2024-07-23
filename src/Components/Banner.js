import React from 'react'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r  from-red from-65% to-123%'>
       <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
        {/*texts stuff*/}
      <div className='md:w-1/2 space-y-8 px-4'>
      <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Get the tastiest and freshest <span className='text-green'>Food</span> ever</h2>
      <p className='text-xl text-[#eaf1c4]'>Where each bite gives the taste of indian spices</p>
      <button className='btn bg-green text-blue rounded-full px-8 py-4 font-semibold '>Order Now</button>
      </div>
      
      {/*images stuff*/}
      <div className='md:w-1/2'>
      <img src="i1.jpg" alt='' className='rounded-3xl '/>
      <div className='flex flex-col md:flex-row items-center justify-around -mt-10'>
      <div className='sm:flex hidden bg-slate-200 py-0.01 px-1 rounded-3xl items-center gap-4 shadow-md w-20'>
        <img src='i3.jpg' alt='' className='rounded-3xl ' />
        
        <div className='space-y-1'>
        <h5 className='text-white font-medium mb-1'>
            SSA SPCL
        </h5>
        <div className="rating rating-md">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" readOnly/>
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-600"
    defaultChecked readOnly/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" readOnly/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" readOnly/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" readOnly/>
</div>
<p className='text-dark'>$0.50</p>
      </div>
        
      </div>

      <div className='sm:flex hidden bg-slate-200 py-.01 px-1 rounded-3xl items-center gap-4 shadow-md w-20'>
        <img src='i4.jpg' alt='' className='rounded-3xl ' />

        <div className='space-y-1'>
        <h5 className='text-white font-medium mb-1'>
            SSA SPCL
        </h5>
        <div className="rating rating-md">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" readOnly/>
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-600"
    defaultChecked readOnly/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" readOnly/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" readOnly/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" readOnly/>
</div>
<p className='text-dark'>$1.00</p>
      </div>
        
      </div>






    
      </div>
      </div> 
    </div>
    </div>
  );
};

export default Banner
