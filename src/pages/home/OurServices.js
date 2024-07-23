import React from 'react'


const serviceList=[
    {
      id:1,
      title:"Catering",
      des:" Make your event unforgettable with our top-notch catering service! We offer tailored menus, stunning presentations, and flawless execution, ensuring every bite delights your guests",
      image:"c1.png",
    
    },
  
    {
      id:2,
      title:"Fast Delievery",
      des:" Craving fast and tasty? Our delivery service brings your favorite fast food right to your door in no time. Enjoy hot, crispy delights and quick service for a satisfying meal without the wait!",
      image:"c2.png",
    
    },
  
    {
      id:3,
      title:"Online Ordering",
      des:" Enjoy effortless dining with our online food ordering service—browse, order, and get delicious meals delivered straight to your door, fast and easy!",
      image:"c3.png",
    
    },
  
    {
      id:4,
      title:"Coupons",
      des:" Save big with our exclusive food ordering coupons—get your favorite meals for less and enjoy unbeatable discounts when you order online!",
      image:"c4.jpg",
    
    },
  
    
  
  ];
  

const OurServices = () => {
  return (
    <div className='section-container my-16 '>
         <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                
                <div className='md:w-1/2'>
                
                <div className='text-left md:w-4/5'>
                    <p className='subtitle'>Our Services</p>
                    <h3 className='title'>Check Out Our Services</h3>
                    <p className='my-5 text-secondary leading-[30px]'>
                    "Craving deliciousness? Enjoy hot, gourmet meals delivered fast and hassle-free to your door. Order now for a convenient dining experience at home!"
                    </p>
                  <button className='btn bg-green text-blue px-8 py-3 rounded-full'>Explore</button>

                </div>


            </div>
            {/*<div className='md:w-1/2'>
                <img src='t5.png' alt='' className='rounded-3xl'/>

                </div>*/}

                <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
                    {
                        serviceList.map((services)=>(
                            <div key={services.id} className='shadow-lg rounded-3xl py-5 px-5 text-center space-y-2 h-13 w-13  text-dark cursor-pointer hover:border-blue transition-all duration-200 hover:border'>
                                <img src={services.image} alt='' className='mx-auto' height={273} width={273}/>
                                <h5 className='pt-3 font-semibold'>{services.title}</h5>
                                <p className='text-secondary'>{services.des}</p>

                            </div>

                        ))



                    }



                </div>





            </div>

        </div>
      
    
  )
}

export default OurServices
