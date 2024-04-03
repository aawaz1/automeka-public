import React, { useEffect, useState } from 'react'
import Productcard from './cards/Productcard'
import CategoriesCard from './cards/Categoriescard'
import { FaArrowLeft } from "react-icons/fa";
import { TbSortDescending } from "react-icons/tb";
import useCategory from './customHooks/useCategory';
import useFeaturedProducts from './customHooks/useFeaturedProducts';
import { Grid } from '@mui/material';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Notfound from './Notfound';

const Category = () => {

    const { search } = useSelector(state => state.cart);
    const [priceSort , setPriceSort] = useState(null);
    const [topSelling , setTopSelling] = useState(false)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');

    const [isOpen, setIsOpen] = useState(false);
    const [featuredProducts , setFeaturedProducts] = useState(null);
    const allProducts = useFeaturedProducts(search)
    useEffect(() => {
        setFeaturedProducts(allProducts);

    }, [allProducts])
    console.log(featuredProducts);
    const sortByPriceLowToHigh = () => {
        // const sortedItems = [...featuredProducts].sort((a, b) => a.price - b.price);
        // setFeaturedProducts(sortedItems);
        setPriceSort(0);
      
      };
      const topSellingProducts = () => {
        setTopSelling(true)

      }
    
      const sortByPriceHighToLow = () => {
        // const sortedItems = [...featuredProducts].sort((a, b) => b.price - a.price);
        // setFeaturedProducts(sortedItems);
        setPriceSort(1);
      };
    const [selectedCategory, setSelectedCategory] = useState(null)
    useEffect(() => {
        if (category) {
            setSelectedCategory(category);
        }
    }, [category])
    const categories = useCategory();
    
    const filteredProduct = (products) => {
        let resultedProducts = products?.filter(item => (!selectedCategory || item?.category?.name === selectedCategory)) || [];
if(priceSort === 0){
    resultedProducts = (resultedProducts || []).sort((a, b) => a.sold_units - b.sold_units)
    
}
if(topSelling === true){
    resultedProducts = (resultedProducts || []).sort((a, b) => a.price - b.price)
    
}


if(priceSort === 1){
    resultedProducts = (resultedProducts || []).sort((a, b) => b.price - a.price)
    
}

        return resultedProducts || []

    }
    return (
        <div className='px-4 py-2'>
            <div onClick={() => setIsOpen(!isOpen)} className={`flex md:hidden ${isOpen ? 'justify-start' : 'justify-end'}`}>{isOpen ? <FaArrowLeft style={{ fontSize: "1.0rem" }} /> : <TbSortDescending style={{ fontSize: "1.5rem" }} />}</div>
            {isOpen && (
                <div className='top-0 relative h-[100vh] w-[100vw]'> <h2 className='text-[1rem] pl-4 pt-3 font-semibold '>Select Category</h2>
                    {/* <div className='pb-1 '>   <hr className='border border-solid border-gray-400 w-[80%] m-auto p-0' /></div> */}

                    <div className='p-2 flex flex-wrap gap-2'>
                        {categories.map(category => {
                            return (<button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-customOrange hover:text-white' onClick={() => setSelectedCategory(category.name)}>{category.name}</button>)

                        })}




                    </div>
                    <div className='flex items-center px-2 '>
                        <button className=' border border-solid border-gray-400 px-4 py-1  rounded-sm active:bg-slate-600 bg-slate-300 ' onClick={() => setIsOpen(!isOpen)}  >Ok</button>
                    </div></div>
            )}
            <div className=' container '>
                <Grid container spacing={1} >
                    <Grid item lg={2} md={3} xs={12}>
                        <div className='hidden md:block   border border-2px border-solid rounded-sm  justify-center shadow-lg border-gray-400 w-[100%]'>
                            <h2 className='text-[1rem] pl-4 pt-3 font-semibold '>Select Category</h2>
                            <div className='pb-1'>   <hr className='border border-solid border-gray-400 w-[80%] m-auto p-0' /></div>

                            <div className='p-4 flex flex-wrap gap-2'>
                                {categories.map(category => {
                                    return (
                                    <button className={`text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-customOrange hover:text-white ${selectedCategory === category?.name ? "bg-customOrange text-white" : ""}`} onClick={() => setSelectedCategory(category.name)}>{category.name}</button>
                                    )

                                })}





                            </div>
                            <div className='hidden md:block items-center px-2  border border-2px border-solid rounded-sm  justify-center shadow-lg border-gray-400 gap-2 w-[100%]'>
                            <h2 className='text-[1rem] pl-7 pt-3  font-semibold '>filters</h2>
                            <div className='pb-1'>   <hr className='border border-solid border-gray-400 w-[80%] m-auto p-0' /></div>
                            <button className={`text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-customOrange hover:text-white ${topSelling ? "bg-customOrange text-white" : ""}`} onClick={topSellingProducts}>Top Selling</button>
                            <button className={`text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-customOrange hover:text-white ${priceSort === 0 ? "bg-customOrange text-white" : ""} `}  onClick={sortByPriceLowToHigh}>Low To High</button>
                            <button className={`text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-customOrange hover:text-white ${priceSort === 1 ? "bg-customOrange text-white" : ""}`}  onClick={sortByPriceHighToLow}> High to Low</button>

                            </div>
                        </div>

                    </Grid>
                    <Grid item container lg={10} md={9} xs={12} spacing={2}>

                     {featuredProducts.length > 0 ?   
                            filteredProduct(featuredProducts).map(category => {
                                return (<Grid item lg={3} md={6} xs={12}><Productcard product={category} /></Grid>)
                            }) : <Notfound/>}




                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Category