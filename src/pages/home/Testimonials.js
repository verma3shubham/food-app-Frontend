import React from 'react'
import { FaStar } from 'react-icons/fa';












const Testimonials = () => {
  return (
    <div>
      
        <div className='section-container'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='md:w-1/2'>
                <img src='t1.img' alt=''className='height={90} width={90}'/>

                </div>
                <div className='md:w-1/2'>
                
                <div className='text-left md:w-4/5'>
                    <p className='subtitle'>Testimonials</p>
                    <h3 className='title'>Know What Our Customers Say About Us</h3>
                    <p className='my-5 text-secondary leading-[30px]'>"I had the great experience in ordering the food from this app.The customer service is the best provided here!"</p>

                    {/*Avatar */}
                    <div className='flex items-center gap-4 flex-wrap'>
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="t2.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="t3.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="t4.jpg" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="bg-neutral text-neutral-content w-12 ">
      <span >+99</span>
    </div>
  </div>
</div>
        <div className='space-y-1'>
            <h5 className='text-lg font-semibold'>Customer Feedback</h5>
            
            <div >
            <div className='flex items-center gap-2'>
                <div className='flex flex-col-reverse md:flex-row flex-wrap p-1'>
                <FaStar className=' text-green'/>
                <FaStar className=' text-green'/>
                <FaStar className=' text-green'/>
                <FaStar className=' text-green'/>
                <FaStar className=' text-green'/>
                
                </div>
                <span className='font-medium'>4.7</span>
                </div>
                
                <span className='text-[#807E7E]'>(11.2k reviews)</span>
            </div>
        </div>



                </div>

                </div>


            </div>
            </div>

        </div>
      
    </div>
  )
}

export default Testimonials
