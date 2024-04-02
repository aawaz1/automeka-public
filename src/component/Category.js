import React, { useEffect, useState } from 'react'
import Productcard from './cards/Productcard'
import CategoriesCard from './cards/Categoriescard'
import { FaArrowLeft } from "react-icons/fa";
import { TbSortDescending } from "react-icons/tb";
import useCategory from './customHooks/useCategory';
import useFeaturedProducts from './customHooks/useFeaturedProducts';
import { Grid } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';

const Category = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const name = searchParams.get('name');

    const [isOpen, setIsOpen] = useState(false);
    const featuredProducts = useFeaturedProducts(name);
    const [selectedCategory, setSelectedCategory] = useState(null)
    useEffect(() => {
        if (category) {
            setSelectedCategory(category);
        }
    }, [category])
    const categories = useCategory();
    return (
        <div className='px-4 py-2'>
            <div onClick={() => setIsOpen(!isOpen)} className={`flex md:hidden ${isOpen ? 'justify-start' : 'justify-end'}`}>{isOpen ? <FaArrowLeft style={{ fontSize: "1.0rem" }} /> : <TbSortDescending style={{ fontSize: "1.5rem" }} />}</div>
            {isOpen && (
                <div className='top-0 relative h-[100vh] w-[100vw]'> <h2 className='text-[1rem] pl-4 pt-3 font-semibold '>Select Category</h2>
                    {/* <div className='pb-1 '>   <hr className='border border-solid border-gray-400 w-[80%] m-auto p-0' /></div> */}

                    <div className='p-2 flex flex-wrap gap-2'>
                        {categories.map(category => {
                            return (<button className='text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white' onClick={() => setSelectedCategory(category.name)}>{category.name}</button>)

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
                                    return (<button className={`text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-orange-400 hover:text-white ${selectedCategory === category?.name ? "bg-orange-400 text-white" : ""}`} onClick={() => setSelectedCategory(category.name)}>{category.name}</button>)

                                })}





                            </div>

                        </div>
                    </Grid>
                    <Grid item container lg={10} md={9} xs={12} spacing={2}>

                        {featuredProducts.filter(item => !selectedCategory || item.category.name === selectedCategory).map(category => {
                            return (<Grid item lg={3} md={6} xs={12}><Productcard product={category} /></Grid>)
                        })}




                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Category