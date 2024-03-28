import FrameComponent2 from "../components/FrameComponent2.js";
import FrameComponent1 from "../components/FrameComponent1";
import SectionHomeCheckoutWishlist from "../components/SectionHomeCheckoutWishlist";
import VariableModifier from "../components/VariableModifier";
import DataTransformer from "../components/DataTransformer";
import GroupComponent1 from "../components/GroupComponent1";
import VariableHolder from "../components/VariableHolder";

const Wishlist = () => {
  return (
    <div>
        <Box>
            
        </Box>
        </div>
   
//     <div className=" container h-[50rem] flex flex-col self-center px-5 pb-3 pt-3 mt-16 w-full font-medium max-w-[1371px] max-md:mt-10 max-md:max-w-full">
//     <div className="text-2xl text-black max-md:max-w-full">
//       Shopping Cart
//     </div>
//     <div className="flex gap-5 justify-around mt-16 w-full text-lg text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//       <div>PRODUCT</div>
//       <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
//         <div>PRICE</div>
//         <div className="flex-auto">QUANTITY</div>
//         <div className="flex-auto">TOTAL</div>
//       </div>
//     </div>
//     <div className="shrink-0 mt-7 border border-solid bg-stone-300 border-stone-300 h-[3px] max-md:max-w-full" />
//     <div className="flex gap-5 justify-between px-0.5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
//       <div className="flex gap-5 justify-between items-center">
//         {/* <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4275a5684bdda0fcbc734c7ccf0f0a5c197ca91676414ac6082d84401871c22e?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//           className="shrink-0 self-stretch my-auto w-8 aspect-square"
//         /> */}
//         <img
//           loading="lazy"
//           srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//           className="shrink-0 self-stretch w-20 aspect-[0.74]"
//         />
//         <div className="flex flex-col self-stretch my-auto">
//           <div className="text-lg text-black">10w40 United Oil</div>
//           <div className="flex gap-2 mt-3.5 text-xs whitespace-nowrap text-neutral-400">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/152a7afe7af605eb2fd747cfb78e7ffd8dad87983801750ca1c0a5c35d673567?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//               className="shrink-0 max-w-full aspect-[5] w-[104px]"
//             />
//             <div>(4.7)</div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-5 justify-around items-center self-start mt-5 text-base max-md:flex-wrap max-md:max-w-full">
//         <div className="self-stretch my-auto text-black"> 3.500 KD</div>
//         <div className="self-stretch my-auto text-amber-500">
//           {" "}
//           out of stock
//         </div>
//         <div className="justify-center self-stretch px-2 py-2 tracking-tight text-center text-white bg-amber-500 rounded-md ">
//           Add To Cart
//         </div>
//       </div>
//     </div>
//     {/* <div className="shrink-0 mt-2.5 border border-solid bg-stone-300 border-stone-300 h-[3px] max-md:max-w-full" /> */}
//     {/* <div className="flex gap-5 justify-between px-0.5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
//       <div className="flex gap-5 justify-between items-center">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e06854917bc79b4fe8f53567a45503be0ff51abeef7dfe2df9f398759b100c1?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//           className="shrink-0 self-stretch my-auto w-8 aspect-square"
//         />
//         <img
//           loading="lazy"
//           srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//           className="shrink-0 self-stretch max-w-full aspect-[0.88] w-[109px]"
//         />
//         <div className="flex flex-col self-stretch my-auto">
//           <div className="text-lg text-black">
//             5w30 united oil
//             <br />
//           </div>
//           <div className="flex gap-2 mt-3.5 text-xs whitespace-nowrap text-neutral-400">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e904d8713a1faf3431b8ee28edf33374e9d95a515c42b155e20cd0c5e4e2881?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//               className="shrink-0 max-w-full aspect-[5] w-[104px]"
//             />
//             <div>(4.7)</div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-5 justify-between items-center my-auto text-base max-md:flex-wrap max-md:max-w-full">
//         <div className="self-stretch my-auto text-black"> 1.600 KD</div>
//         <div className="self-stretch my-auto text-amber-500">
//           {" "}
//           out of stock
//         </div>
//         <div className="justify-center self-stretch px-2 py-2 tracking-tight text-center text-white bg-amber-500 rounded-md ">
//           Add To Cart
//         </div>
//       </div>
//     </div> */}
//     <div className="self-end mt-12 text-base text-black max-md:mt-10">
//       {" "}
//       Clear All Wishlist
//     </div>
//   </div>
  );
};

export default Wishlist;