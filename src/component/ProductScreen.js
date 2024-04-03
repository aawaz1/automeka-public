import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import TabNav from '../component/Tabnav.js'
import { useNavigate, useParams } from 'react-router-dom';

import { IMAGE_URL } from '../constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../store/slices/cart-slice.js";
import useFeaturedProducts from './customHooks/useFeaturedProducts.js';
import Productcard from './cards/Productcard.js';
import ProductSlider from './ScrollComponent/ProductSlider.js';
import { fetchProductDetails } from '../store/api.js';
import { addToWishlist, deleteFromWishlist } from '../store/slices/wishlist-slice.js';
import CommonRating from './Rating.js';

const ProductScreen = () => {
    const  {wishlistItems } = useSelector(state => state.wishlist);
    const navigate = useNavigate()
    const [qty, setQty] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch()
    const [product, setProduct] = useState();

    const handleWishlist = () => {
        dispatch(addToWishlist(product))
        if(product){
            dispatch(deleteFromWishlist(product._id))
        }
    }


    const handleProductDetail = async () => {
        let { data, statusText } = await fetchProductDetails(id);
        if (statusText == "OK") {
            setProduct(data.data || null)
        }
    }

    console.log("product: ", product);

    const handleImage = (image) => {
        setCurrentImage(image);


    }


    const [currentImage, setCurrentImage] = useState();
    const [selectedColor, setSelectedColor] = useState(null);
    const [availability, setAvailability] = useState(null);
    const featuredProducts = useFeaturedProducts();
    const getPriceForColor = () => {
        const selectedVariant = product?.variants?.find(variant => variant.name === selectedColor);
        return selectedVariant ? selectedVariant.price : product?.price;
    };
    const handleIncrement = () => {
        if (qty < product?.on_stock) {
            setQty(qty + 1);
        } else if (qty < availability) {
            setQty(qty + 1);
        }
    };


    const handleDecrement = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };



    useEffect(() => {
        if (!product?.on_stock && product?.variants?.length > 0) {
            setSelectedColor(product.variants[0].name);
            setAvailability(product.variants[0].stock);
        }
    }, [product]);
    const handleColorSelect = (color, stock) => {
        setSelectedColor(color);
        setAvailability(stock);
    };
    useEffect(() => {
        handleProductDetail()
    }, [id])
    useEffect(() => {
        let url = IMAGE_URL + product?.image_list?.[0];
        if (url && currentImage != url) { setCurrentImage(url) }

    }, [product])

    return (
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4 p-2'>
                <div className='p-2'>

                    <div>
                        <img src={currentImage} alt="main" width={'80%'} style={{ height: "20rem" }} />
                    </div>
                    {product?.image_list?.length > 1 && <>
                        <div className='flex p-2 px-6 gap-8'>
                            {product?.image_list?.map(image => {
                                return <div onMouseEnter={() => handleImage(IMAGE_URL + image)}><img style={{ cursor: "pointer", width: '6rem', height: "4rem" }} src={IMAGE_URL + image} /></div>
                            })}



                        </div></>}


                </div>
                <div className='p-2'>
                    <h2 className='text-[1.2rem]'>{product?.name}</h2>
                    <h2 className='text-[1.0rem] text-green-400'>KD {getPriceForColor()?.toFixed(3)}</h2>
                    <CommonRating value={product?.rating} />
                    <div className='flex py-2'>
                        {availability !== null && availability > 0 ? (<>
                            <div className='cursor-pointer                                                                                           rounded-l-lg border border-gray-500 px-2 bg-gray-100' onClick={handleDecrement}>-</div>
                            <div className='px-2 border border-gray-500'>{qty}</div>
                            <div className=' cursor-pointer rounded-r-lg border border-gray-500 bg-gray-100 px-2' onClick={handleIncrement}>+</div>
                        </>) : ((
                            <>
                                {product?.on_stock > 1 ? (
                                    <>
                                        <div className=' cursor-pointerrounded-l-lg border border-gray-500 px-2 bg-gray-100' onClick={handleDecrement}>-</div>
                                        <div className='px-2 border border-gray-500'>{qty}</div>
                                        <div className=' cursor-pointer rounded-r-lg border border-gray-500 bg-gray-100 px-2' onClick={handleIncrement}>+</div>
                                    </>) : null}

                            </>
                        ))}

                    </div>
                    {product?.variants?.length > 0 && (
                        <div className="colors " >
                            <span >Select variant :</span>
                            <div className="color-options flex gap-2">
                                {product?.variants.map((variant, index) => (
                                    <div style={{}}
                                        className="checkbox flex flex-col"
                                        key={index}

                                        onClick={() => handleColorSelect(variant.name, variant.stock)} // Pass stock as argument
                                    >
                                        <input
                                            className="radio-input"
                                            type="radio"
                                            name={`color-${index}`}

                                            value={variant.name}
                                            checked={selectedColor === variant.name}
                                            onChange={() => handleColorSelect(variant.name, variant.stock)} // Pass stock as argument
                                        />
                                        <label htmlFor={`color-${index}`} id="label">{variant?.name}</label>
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}
                    {/* <h2 className='text-[1.0rem] font-semibold py-2'>Select Variant :</h2>
                    <div className='flex gap-2'>
                        <div class="flex  items-center">
                            <input type="radio" id="radio1" name="radios" class="hidden" />
                            <label for="radio1" class="cursor-pointer relative">
                                <div class="w-4 h-4 text-sm border border-gray-400 rounded-full mr-2"></div>
                                red
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="radio1" name="radios" class="hidden" />
                            <label for="radio1" class="cursor-pointer relative">
                                <div class="w-4 h-4 text-sm border border-gray-400 rounded-full mr-2"></div>
                                blue
                            </label>
                        </div>
                    </div> */}
                    <div className='flex  gap-4 items-center'>
                        {availability !== null && availability > 0 ? (
                            <>
                                <button style={{ border: "2px solid orange" }} className=' rounded-md    bg-white px-2 py-1 text-customOrange font-medium font-poppins   ' onClick={() => dispatch(addToCart({ product, qty }))}> Add to Cart</button>


                                <button className='  bg-customOrange px-4 py-1 text-white font-medium font-poppins rounded-md'> Buy Now</button>
                                <FaRegHeart onClick={handleWishlist} /> </>) : (
                            <>
                                {product?.on_stock > 0 && (
                                    <>
                                        <button style={{ border: "2px solid orange" }} className=' rounded-md    bg-white px-2 py-1 text-customOrange font-medium font-poppins   ' onClick={() => dispatch(addToCart({ product, qty }))}> Add to Cart</button>


                                        <button className='  bg-customOrange px-4 py-1 text-white font-medium font-poppins rounded-md' onClick={() => {
                                            try {
                                                dispatch(addToCart({ product, qty }));
                                                navigate('/cart');
                                            } catch (error) {
                                                console.error('Error occurred while adding to cart:', error);
                                            }
                                        }} > Buy Now</button>
                                        <FaRegHeart onClick={() => dispatch(addToWishlist(product))} />  </>
                                )}
                                {product?.on_stock <= 0 && (
                                    <>
                                        <div style={{ cursor: "not-allowed" }} className=' p-[0.42rem] bg-black bottom-2 rounded-sm flex  items-center justify-center'>{ }
                                            <button style={{ cursor: "not-allowed" }} disabled className='text-white  flex items-center '> Out Of Stock</button>
                                        </div>
                                        <FaRegHeart onClick={() => dispatch(addToWishlist(product))} /></>
                                )}
                            </>
                        )}




                    </div>
                    <div className='flex items-center pt-4 py-2 gap-2'>
                        <h2 className='text-[1rem] '>Country of Origin :</h2>
                        <h4 className='text-[1rem]'>{product?.origin}</h4>
                    </div>
                    <div className='flex items-center py-2 gap-2'>
                        <h2 className='text-[0.9rem] '>Product ID :</h2>
                        <h4 className='text-[0.9rem]'>{product?.port_number}</h4>
                    </div>
                    {/* <div className='flex items-center py-2 gap-2'>
                        <h2 className='text-[1rem] '>Country of Origin :</h2>
                        <h4 className='text-[1rem]'>China</h4>
                    </div> */}
                </div>
            </div>

            <div><div className='bg-gray-100  py-2'> <TabNav product={product} /></div>
                <div className='py-4'>
                    <h2 className='text-[1.5rem] py-4'>Related Products</h2>
                    <div>
                        <ProductSlider >
                            {featuredProducts.filter(item => item.category.name === product?.category?.name && item._id !== id).map(product => {
                                return (<Productcard product={product} />)
                            })}
                        </ProductSlider>
                        <div className="  flex justify-center mt-2  items-center   text-[1rem]" >
                            <span className="font-poppins cursor-pointer text-gray-600  text-[1rem]" onClick={() => navigate(`/category/?category=${product?.category?.name}`)}> View All</span>
                        </div>
                    </div>
                </div></div>


        </div>
    )
}

export default ProductScreen