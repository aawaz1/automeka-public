import React, { useState } from 'react';
import { TERipple } from 'tw-elements-react';
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveSearch } from '../../store/slices/cart-slice';

const SearchBox = () => {
    const cart  = useSelector(state => state.cart);
    const {search} = cart;
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { keyword: urlKeyword } = useParams();
    const [keyword, setKeyword] = useState(urlKeyword || '');
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/category`)
        // if (keyword.trim()) {
        //     setKeyword('');
        //     navigate(`/category?name=${keyword}`)
        // } 
        // else {
        //     navigate("/");
        // }

    }
    return (
        <div className="w-50 md:w-96">
            <div className=" flex w-full flex-wrap items-stretch">
                <input
                    type="search"
                    className=" m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Enter Parts Details here"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => dispatch(saveSearch(e.target.value))}
                    aria-describedby="button-addon1" />

                {/* <!--Search button--> */}

                <button

                    className=" h-10 bg-slate-600 z-[2] flex items-center rounded-r  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    onClick={submitHandler}
                    id="button-addon1">
                    <IoSearchSharp className=' ' />

                </button>

            </div>
        </div>
    );
}

export default SearchBox;
