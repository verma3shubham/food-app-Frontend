import React,{useState,useEffect} from 'react';
import Cards from '../../Components/Cards';
import {FaFilter} from "react-icons/fa";

const Menu = () => {
    const [menu,setMenu] = useState([]);
    const [filteredItems,setFilteredItems] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState("all");
    const [sortOption,setSortOption] = useState("default");
    const [currentPage,setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);



    //loading 
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch("http://localhost:3001/menu");
                const data = await response.json();
                //console.log(data);
                setMenu(data);
                setFilteredItems(data);
            }
            catch (error){
                console.log("Error fetching data",error);

            }
        };
        fetchData();
    },[]
);
// filtering data based on the category
const filterItem = (category)=>{
    const filtered = category === "all"
     ? menu
     : menu.filter((item)=>item.category===category);


    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);

}
// show data function
const showAll=()=>{
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
}


    
    const handleSortChange=(option)=>{
        setSortOption(option);
        let sortedItems = [...filteredItems];
    
    //logic
    switch(option){
        case "A-Z":
            sortedItems.sort((a,b)=> a.name.localeCompare(b.name))
            break;
        case "Z-A":
            sortedItems.sort((a,b)=> b.name.localeCompare(a.name))
            break;
        case "Low to High":
            sortedItems.sort((a,b)=>a.price-b.price)
            break;
        case "Low to High":
            sortedItems.sort((a,b)=>b.price-a.price)
            break;
        default:
            break;
        


    }

    setFilteredItems(sortedItems)
    setCurrentPage(1);
};


const indexOfLastItem = currentPage + itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredItems.slice(indexOfFirstItem,indexOfLastItem);
const paginate = (pageNumber)=>{
    setCurrentPage(pageNumber);
}



  return (
    <div>
        {/* menu banner */}
      <div className='section-container bg-gradient-to-r  from-red from-65% to-123%'>
       <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
        {/*texts stuff*/}
      <div className='text-center space-y-8 px-4'>
      <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Get the tastiest and freshest <span className='text-green'>Food</span> ever</h2>
      <p className='text-xl text-[#bbb6b6] md:w-4/5 mx-auto'>Where each bite gives the taste of indian spices</p>
      <button className='btn bg-green text-blue rounded-full px-8 py-4 font-semibold '>Order Now</button>
      </div>
      
     
    </div>
    </div>
    {/* menu shop section */}
    <div className='section-container'>


        {/* filtering and sorting*/}

       <div className='flex flex-col md:flex-row flex-wrap justify-between items-center space-y-3 mb-6'> 

            {/* buttons for all categories */}
            <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-dark'>
                <button onClick={showAll} className={selectedCategory === "all" ? "active" : ""}>All</button>
                <button onClick={()=> filterItem("salad")} className={selectedCategory === "salad" ? "active" : ""}>Salad</button>
                <button onClick={()=> filterItem("pizza")} className={selectedCategory === "pizza" ? "active" : ""}>Pizza</button>
                <button onClick={()=> filterItem("soup")} className={selectedCategory === "soup" ? "active" : ""}>Soups</button>
                <button onClick={()=> filterItem("dessert")} className={selectedCategory === "dessert" ? "active" : ""}>Desserts</button>
                <button onClick={()=> filterItem("drinks")} className={selectedCategory === "drinks" ? "active" : ""}>Cold Drinks</button>
                </div>

        {/*sorting*/}
        
            <div className='bg-grey mb-2 p-2 justify-end rounded-sm'>
                <FaFilter className='h-4 w-4 text-dark'/>
            </div>
            <select name="sort" id="sort" onChange={(e) => handleSortChange(e.target.value)} value = {sortOption}>
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Low-to-high">Low to high</option>
                <option value="high-to-low">High to low</option>
            </select>
            
            
        
        </div>
        
    {/* products card */}
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
        {
            currentItems.map((item)=>(
                <Cards key={item._id} item={item}/>
            ))
        }
    </div>
    </div>
    {/*pagination */}
    <div className='flex justify-center my-8'>
        {
        Array.from({length: Math.ceil(filteredItems.length/itemsPerPage),}).map((_,index)=>(

            <button key={index+1} onClick={()=>paginate(index+1)} className={'mx-2 px-2 py-1 mt-7 mb-7 rounded-full  ${CurrentPage=== index + 1 ? bg-grey : bg-blue} '}>
                {index+1}
            </button>

        ))
    }
    </div>
    </div>
  )
}

export default Menu
