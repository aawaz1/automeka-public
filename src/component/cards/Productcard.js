import React, { useEffect, useState } from 'react';

import { MdShoppingCart } from "react-icons/md";
import { IMAGE_URL } from '../../constants';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import CommonRating from '../Rating';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cart-slice';
import { addToWishlist, deleteFromWishlist } from '../../store/slices/wishlist-slice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Productcard = ({ product }) => {
  const { wishlistItems } = useSelector(state => state.wishlist);

  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsInWishlist(wishlistItems.some(item => item?._id === product?._id));
  }, [wishlistItems, product?._id]);
  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(deleteFromWishlist(product?._id));
      console.log("true")
    } else {
      dispatch(addToWishlist(product));
      console.log("false")
    }
    setIsInWishlist(!isInWishlist);
  };
  console.log(product);

  return (
    <div
      className='flex items-center justify-center relative'
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="border max-w-[200px] p-[1rem] border-gray-500 relative ">
        {product?.discount ? <div className='bg-red-600 absolute rounded-sm  py-1 px-2   top-2 right-2' style={{ fontSize: "0.5rem" }}><span className='text-white'>{product?.discount}%</span></div> : null}
        <Link to={`/product/${product?._id}`}>
          <img
            className="p-2"
            style={{ width: "13rem", height: "8rem", objectFit: "contain" }}
            src={IMAGE_URL + product?.image_list[0]}
            alt="categories image"
          />
        </Link>
        <CommonRating value={product?.rating} />
        {/* <h2 className='text-sm'><Rating /></h2> */}

        <h2 className=" text-sm md:text-[1.1rem]  truncate">{product?.name}</h2>
        {product?.on_stock < 1 ? (<div className='w-[100%] p-[0.42rem] bg-black bottom-2 rounded-sm flex items-center justify-center'>{ }
          <button disabled className='text-white w-[70%]  flex items-center '> Out Of Stock</button>
          <button className='text-white  flex items-center ' onClick={handleWishlist}> {isInWishlist ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}</button>
          {/* <button onClick={() => dispatch(addToWishlist(product))} disabled className='text-white w-[30%]  flex items-center '>  <FaRegHeart  /></button> */}

        </div>) : product?.coming_soon === false && showButton ? (<>
          {product?.on_stock && product?.on_stock > 0 ? (<div className=' w-[100%] p-[0.42rem] gap-2 bg-customOrange bottom-2 rounded-sm flex items-center justify-center'>{ }
            {product?.variants && product?.variants.length > 0 ? <button className='text-white w-[70%] flex justify-around items-center '
              onClick={() => navigate(`product/${product?._id}`)}>
              <MdShoppingCart className='font-sm' />
              Add To Cart</button> : <button className='text-white w-[70%] flex justify-around items-center ' onClick={() => dispatch(addToCart({ product, qty: 1 }))}>
              <MdShoppingCart className='font-sm' />
              Add To Cart</button>
            }
            <button className='text-white w-[30%] flex items-center ' onClick={handleWishlist}>  {isInWishlist ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />} </button>
          </div>) : (<div className=' p-[0.42rem] bg-black bottom-2 rounded-sm flex items-center justify-center'>{ }
            <button disabled className='text-white  flex items-center '> Out Of Stock</button>
          </div>)}
        </>

        ) :
          (
            product?.coming_soon === false ? (<h2 className=" py-[0.3rem] text-green-400 text-sm md:text-[0.9rem]">
              Price: KD {product?.price.toFixed(3)}
            </h2>) : (<><div className='w-[100%] p-[0.42rem] bg-slate-600 bottom-2 rounded-sm flex items-center justify-center'>{ }
              <button disabled className='text-white w-[70%]  flex items-center '> Coming Soon</button>
              <button className='text-white  flex items-center ' onClick={handleWishlist}> {isInWishlist ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}</button>
              {/* <button onClick={() => dispatch(addToWishlist(product))} disabled className='text-white w-[30%]  flex items-center '>  <FaRegHeart  /></button> */}

            </div></>)
          )
        }

      </div>

    </div>
  );
}

export default Productcard;
