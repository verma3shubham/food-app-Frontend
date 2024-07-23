import React from 'react'

const categoryItems = [
    {id: 1, title: "Main Dish", despriction: "(86 dishes)", image: "i21.png"},
    {id: 2, title: "Break Fast", despriction: "(12 break fast)", image: "img2.png"},
    {id: 3, title: "Dessert", despriction: "(48 dessert)", image: "img3.png"},
    {id: 4, title: "Snacks", despriction: "(55 Snacks)", image: "i16.png"},
    {id: 5, title: "Browse All", despriction: "(255 Items)", image: "img1.png"}
]

const Catagories = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16'>
        <div className='text-center'>
            <p className='subtitle'>Customer Favorites</p>
            <h2 className='title'>Popular Catagories</h2>
        </div>

        {/* category cards */}
        <div className='flex flex-col-reverse sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-md bg-light py-6 px-5 w-50 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10 '>
                        <div className='w-full mx-auto flex items-center justify-center'><img src={item.image} alt="" className='bg-[#fedb5de6] p-5 rounded-3xl w-32 h-32' /></div>
                        <div className='mt-7 space-y-1'>
                            <h5 className='text-[#1E1E1E] font-semibold '>{item.title}</h5>
                            <p className='text-secondary text-sm justify-around '>{item.despriction}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Catagories