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
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    const { search } = useSelector(state => state.cart);
    const [filterSort, setFilterSort] = useState(null);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    const filterSortQuery = searchParams.get('filterSort');

    const [isOpen, setIsOpen] = useState(true);
    const [featuredProducts, setFeaturedProducts] = useState(null);
    const allProducts = useFeaturedProducts(search)
    useEffect(() => {
        setFeaturedProducts(allProducts);

    }, [allProducts])
    console.log(featuredProducts);
    

    const handleFilter = (val) => {
        setFilterSort((prevState) => {
            if (prevState === val) {
                return null
            }
            return val
        })
    }


    const [selectedCategory, setSelectedCategory] = useState(null)
    useEffect(() => {
        if (filterSortQuery) {
            setFilterSort(Number(filterSortQuery))
        }
    }, [filterSortQuery])
    useEffect(() => {

        if (category) {
            setSelectedCategory(category);
        }
    }, [category])
    const categories = useCategory();

    const filteredProduct = (products) => {
        let resultedProducts = products?.filter(item => (!selectedCategory || item?.category?.name === selectedCategory)) || [];
        if (filterSort === 0) {
            resultedProducts = (resultedProducts || []).sort((a, b) => a.price - b.price)

        }
        if (filterSort === 2) {
            resultedProducts = (resultedProducts || []).sort((a, b) => (b.sold_unit || 0) - (a.sold_unit || 0))

        }


        if (filterSort === 1) {
            resultedProducts = (resultedProducts || []).sort((a, b) => b.price - a.price)

        }

        return resultedProducts || []

    }
    const filteredData = filteredProduct(featuredProducts)
    return (
        <div className='px-4 py-2'>
            <div onClick={() => setIsOpen(!isOpen)} className={`flex md:hidden ${isOpen ? 'justify-start' : 'justify-end'}`}>{isOpen ? <FaArrowLeft style={{ fontSize: "1.0rem" }} /> : <TbSortDescending style={{ fontSize: "1.5rem" }} />}</div>
            {isOpen && false && (
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
            <div className='container'>
                <Grid container spacing={1} >
                    <Grid style={{ display: isOpen ? "block" : "none" }} item xs={12}>
                        <div className=' pl-4 pt-1 pb-2  border border-2px border-solid rounded-sm  justify-center  border-gray-400 w-[100%]'>
                            <Grid container spacing={2} > <Grid item md={6} xs={12}>
                                <h2 className='text-[1rem] font-semibold '>Select Category</h2>


                                <div className='p-[0.2rem] flex flex-wrap gap-2'>
                                    {categories.map(category => {
                                        return (
                                            <button className={`text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm hover:bg-customOrange hover:text-white ${selectedCategory === category?.name ? "bg-customOrange text-white" : ""}`} onClick={() => setSelectedCategory(category.name)}>{category.name}</button>
                                        )

                                    })}





                                </div>
                            </Grid>


                                <Grid item xs={12} md={6}>
                                    <h2 className='text-[1rem]   font-semibold '> Filters</h2>

                                    <div className='p-[0.2rem] flex flex-wrap gap-2'>
                                        <button className={`text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm   ${filterSort === 2 ? "bg-customOrange text-white" : ""}`} onClick={() => handleFilter(2)}>Top Selling</button>
                                        <button className={`text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm   ${filterSort === 0 ? "bg-customOrange text-white" : ""} `} onClick={() => handleFilter(0)}>Low To High</button>
                                        <button className={`text-[0.9rem] font-medium font-poppins border border-black border-20px p-1 px-2 rounded-sm e  ${filterSort === 1 ? "bg-customOrange text-white" : ""}`} onClick={() => handleFilter(1)}> High to Low</button>
                                    </div>
                                </Grid>
                            </Grid>


                        </div>

                    </Grid>
                    <Grid item container xs={12} spacing={2}>

                        {filteredData?.length > 0 ?
                            filteredData.map(category => {
                                return (<Grid item lg={3} md={4} xs={12}><Productcard product={category} /></Grid>)
                            }) : <Notfound />}




                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default Category