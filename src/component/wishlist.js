import FrameComponent2 from "../components/FrameComponent2.js";
import FrameComponent1 from "../components/FrameComponent1";
import SectionHomeCheckoutWishlist from "../components/SectionHomeCheckoutWishlist";
import VariableModifier from "../components/VariableModifier";
import DataTransformer from "../components/DataTransformer";
import GroupComponent1 from "../components/GroupComponent1";
import VariableHolder from "../components/VariableHolder";

const Wishlist = () => {
  return (
    // <div className=" container w-full h-[40rem] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border tracking-[normal] text-left text-base text-black font-poppins mq900:h-auto">
     
     
        
         
         
    //   <div className="w-[242px] relative text-3xl font-medium hidden z-[7] mq450:text-lg">
    //     Tyre Polish Dr Marcus
    //   </div>
    //   <div className="w-[783px] flex flex-row items-start justify-center pt-2 px-5 pb-12 box-border max-w-full shrink-0 text-5xl">
    //     <h3 className="m-0 relative text-inherit font-medium font-inherit shrink-0 [debug_commit:f6aba90] mq450:text-lgi">
    //       Your Wishlist items
    //     </h3>
    //   </div>
    //   <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[20.5px] pr-5 pl-[22px] box-border max-w-full shrink-0 text-lg">
    //     <div className="w-[1368px] flex flex-row items-start justify-between shrink-0 [debug_commit:f6aba90] max-w-full gap-[20px] mq900:flex-wrap mq900:justify-center">
    //       <div className="relative font-medium inline-block min-w-[86px]">
    //         PRODUCT
    //       </div>
    //       <div className="flex flex-row items-start justify-start gap-[149px] max-w-full mq450:gap-[149px_37px] mq900:flex-wrap mq900:gap-[149px_74px]">
    //         <div className="relative font-medium inline-block min-w-[51px]">
    //           PRICE
    //         </div>
    //         <div className="w-48 flex flex-col items-start justify-start">
    //           <div className="relative font-medium">STOCK STATUS</div>
    //         </div>
    //         <div className="relative font-medium inline-block min-w-[120px]">
    //           ADD TO CART
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="self-stretch h-[25.5px] flex flex-row items-start justify-center pt-0 pb-[23px] pr-[21px] pl-5 box-border max-w-full">
    //     <img
    //       className="h-[2.5px] w-[1371px] relative object-contain shrink-0 [debug_commit:f6aba90]"
    //       loading="lazy"
    //       alt=""
    //     />
    //   </div>
    //   <VariableModifier />
    //   <div className="self-stretch h-[17.5px] flex flex-row items-start justify-center pt-0 pb-[15px] pr-[21px] pl-5 box-border max-w-full">
    //     <img
    //       className="h-[2.5px] w-[1371px] relative object-contain shrink-0 [debug_commit:f6aba90]"
    //       loading="lazy"
    //       alt=""
    //     />
    //   </div>
    //   <DataTransformer />
    //   <div className="self-stretch h-[30px] flex flex-row items-start justify-center pt-0 pb-[29.5px] pr-[21px] pl-5 box-border max-w-full">
    //     <div className="self-stretch w-[1371.5px] relative box-border shrink-0 [debug_commit:f6aba90] max-w-full border-t-[0.5px] border-solid border-silver-100" />
    //   </div>
    //   <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[412px] pr-5 pl-[1252px] shrink-0 mq1300:pl-[626px] mq1300:box-border mq450:pl-5 mq450:pb-[268px] mq450:box-border mq900:pl-[313px] mq900:box-border">
    //     <div className="relative font-medium shrink-0 [debug_commit:f6aba90]">
    //       {" "}
    //       Clear All Wishlist
    //     </div>
    //   </div>
     
    
      
    // </div>
    <div className=" container h-[50rem] flex flex-col self-center px-5 pb-3 pt-3 mt-16 w-full font-medium max-w-[1371px] max-md:mt-10 max-md:max-w-full">
    <div className="text-2xl text-black max-md:max-w-full">
      Your Wishlist items
    </div>
    <div className="flex gap-5 justify-between mt-16 w-full text-lg text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div>PRODUCT</div>
      <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
        <div>PRICE</div>
        <div className="flex-auto">STOCK STATUS</div>
        <div className="flex-auto">ADD TO CART</div>
      </div>
    </div>
    <div className="shrink-0 mt-7 border border-solid bg-stone-300 border-stone-300 h-[3px] max-md:max-w-full" />
    <div className="flex gap-5 justify-between px-0.5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4275a5684bdda0fcbc734c7ccf0f0a5c197ca91676414ac6082d84401871c22e?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
          className="shrink-0 self-stretch my-auto w-8 aspect-square"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
          className="shrink-0 self-stretch w-20 aspect-[0.74]"
        />
        <div className="flex flex-col self-stretch my-auto">
          <div className="text-lg text-black">10w40 United Oil</div>
          <div className="flex gap-2 mt-3.5 text-xs whitespace-nowrap text-neutral-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/152a7afe7af605eb2fd747cfb78e7ffd8dad87983801750ca1c0a5c35d673567?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
              className="shrink-0 max-w-full aspect-[5] w-[104px]"
            />
            <div>(4.7)</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-center self-start mt-5 text-base max-md:flex-wrap max-md:max-w-full">
        <div className="self-stretch my-auto text-black"> 3.500 KD</div>
        <div className="self-stretch my-auto text-amber-500">
          {" "}
          out of stock
        </div>
        <div className="justify-center self-stretch px-2 py-2 tracking-tight text-center text-white bg-amber-500 rounded-md ">
          Add To Cart
        </div>
      </div>
    </div>
    <div className="shrink-0 mt-2.5 border border-solid bg-stone-300 border-stone-300 h-[3px] max-md:max-w-full" />
    <div className="flex gap-5 justify-between px-0.5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e06854917bc79b4fe8f53567a45503be0ff51abeef7dfe2df9f398759b100c1?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
          className="shrink-0 self-stretch my-auto w-8 aspect-square"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
          className="shrink-0 self-stretch max-w-full aspect-[0.88] w-[109px]"
        />
        <div className="flex flex-col self-stretch my-auto">
          <div className="text-lg text-black">
            5w30 united oil
            <br />
          </div>
          <div className="flex gap-2 mt-3.5 text-xs whitespace-nowrap text-neutral-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e904d8713a1faf3431b8ee28edf33374e9d95a515c42b155e20cd0c5e4e2881?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
              className="shrink-0 max-w-full aspect-[5] w-[104px]"
            />
            <div>(4.7)</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-center my-auto text-base max-md:flex-wrap max-md:max-w-full">
        <div className="self-stretch my-auto text-black"> 1.600 KD</div>
        <div className="self-stretch my-auto text-amber-500">
          {" "}
          out of stock
        </div>
        <div className="justify-center self-stretch px-2 py-2 tracking-tight text-center text-white bg-amber-500 rounded-md ">
          Add To Cart
        </div>
      </div>
    </div>
    <div className="self-end mt-12 text-base text-black max-md:mt-10">
      {" "}
      Clear All Wishlist
    </div>
  </div>
  );
};

export default Wishlist;

// import * as React from "react";

// function MyComponent() {
//   return (
//     <div className="flex gap-5 justify-between px-0.5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
//       <div className="flex gap-5 justify-between items-center">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4275a5684bdda0fcbc734c7ccf0f0a5c197ca91676414ac6082d84401871c22e?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//           className="shrink-0 self-stretch my-auto w-8 aspect-square"
//         />
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
//       <div className="flex gap-5 justify-between items-center self-start mt-5 text-base max-md:flex-wrap max-md:max-w-full">
//         <div className="self-stretch my-auto text-black"> 3.500 KD</div>
//         <div className="self-stretch my-auto text-amber-500"> out of stock</div>
//         <div className="justify-center self-stretch px-6 py-4 tracking-tight text-center text-white bg-amber-500 rounded-md max-md:px-5">
//           Add To Cart
//         </div>
//       </div>
//     </div>
//   );
// }
// // ---------------------------------------------
// import * as React from "react";

// function MyComponent() {
//   return (
//     <div className="flex flex-col self-center px-5 mt-16 w-full font-medium max-w-[1371px] max-md:mt-10 max-md:max-w-full">
//       <div className="text-2xl text-black max-md:max-w-full">
//         Your Wishlist items
//       </div>
//       <div className="flex gap-5 justify-between mt-16 w-full text-lg text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//         <div>PRODUCT</div>
//         <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
//           <div>PRICE</div>
//           <div className="flex-auto">STOCK STATUS</div>
//           <div className="flex-auto">ADD TO CART</div>
//         </div>
//       </div>
//       <div className="shrink-0 mt-7 border border-solid bg-stone-300 border-stone-300 h-[3px] max-md:max-w-full" />
//       <div className="flex gap-5 justify-between px-0.5 mt-6 w-full max-md:flex-wrap max-md:max-w-full">
//         <div className="flex gap-5 justify-between items-center">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/4275a5684bdda0fcbc734c7ccf0f0a5c197ca91676414ac6082d84401871c22e?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//             className="shrink-0 self-stretch my-auto w-8 aspect-square"
//           />
//           <img
//             loading="lazy"
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/463b36be7cb62ffa3ee88fe28cd9c870fa69ccfa4293f5f53f18fd3c814657a6?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//             className="shrink-0 self-stretch w-20 aspect-[0.74]"
//           />
//           <div className="flex flex-col self-stretch my-auto">
//             <div className="text-lg text-black">10w40 United Oil</div>
//             <div className="flex gap-2 mt-3.5 text-xs whitespace-nowrap text-neutral-400">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/152a7afe7af605eb2fd747cfb78e7ffd8dad87983801750ca1c0a5c35d673567?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//                 className="shrink-0 max-w-full aspect-[5] w-[104px]"
//               />
//               <div>(4.7)</div>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-5 justify-between items-center self-start mt-5 text-base max-md:flex-wrap max-md:max-w-full">
//           <div className="self-stretch my-auto text-black"> 3.500 KD</div>
//           <div className="self-stretch my-auto text-amber-500">
//             {" "}
//             out of stock
//           </div>
//           <div className="justify-center self-stretch px-6 py-4 tracking-tight text-center text-white bg-amber-500 rounded-md max-md:px-5">
//             Add To Cart
//           </div>
//         </div>
//       </div>
//       <div className="shrink-0 mt-2.5 border border-solid bg-stone-300 border-stone-300 h-[3px] max-md:max-w-full" />
//       <div className="flex gap-5 justify-between px-0.5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
//         <div className="flex gap-5 justify-between items-center">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e06854917bc79b4fe8f53567a45503be0ff51abeef7dfe2df9f398759b100c1?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//             className="shrink-0 self-stretch my-auto w-8 aspect-square"
//           />
//           <img
//             loading="lazy"
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/649ddd2d6663113850a2316bfe3e96695e6fa1fff5f5af348732a4e5910078a3?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//             className="shrink-0 self-stretch max-w-full aspect-[0.88] w-[109px]"
//           />
//           <div className="flex flex-col self-stretch my-auto">
//             <div className="text-lg text-black">
//               5w30 united oil
//               <br />
//             </div>
//             <div className="flex gap-2 mt-3.5 text-xs whitespace-nowrap text-neutral-400">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e904d8713a1faf3431b8ee28edf33374e9d95a515c42b155e20cd0c5e4e2881?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//                 className="shrink-0 max-w-full aspect-[5] w-[104px]"
//               />
//               <div>(4.7)</div>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-5 justify-between items-center my-auto text-base max-md:flex-wrap max-md:max-w-full">
//           <div className="self-stretch my-auto text-black"> 1.600 KD</div>
//           <div className="self-stretch my-auto text-amber-500">
//             {" "}
//             out of stock
//           </div>
//           <div className="justify-center self-stretch px-6 py-4 tracking-tight text-center text-white bg-amber-500 rounded-md max-md:px-5">
//             Add To Cart
//           </div>
//         </div>
//       </div>
//       <div className="self-end mt-12 text-base text-black max-md:mt-10">
//         {" "}
//         Clear All Wishlist
//       </div>
//     </div>
//   );
// }

// import * as React from "react";

// function MyComponent() {
//   return (
//     <div className="flex justify-center items-center px-16 py-8 w-full text-base text-black whitespace-nowrap bg-neutral-100 max-md:px-5 max-md:max-w-full">
//       <div className="flex gap-5 items-center">
//         <div className="self-stretch my-auto">Home</div>
//         <div className="self-stretch text-amber-500">/</div>
//         <div className="self-stretch my-auto">
//           Wishlist
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// }





// import * as React from "react";

// function MyComponent() {
//   return (
//     <div className="flex gap-5 justify-between px-0.5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
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
//         <div className="self-stretch my-auto text-amber-500"> out of stock</div>
//         <div className="justify-center self-stretch px-6 py-4 tracking-tight text-center text-white bg-amber-500 rounded-md max-md:px-5">
//           Add To Cart
//         </div>
//       </div>
//     </div>
//   );
// }


// import * as React from "react";

// function MyComponent() {
//   return (
//     <div className="flex flex-1 flex-auto gap-5 px-6 py-5 bg-white rounded border-0 border-solid shadow-sm border-zinc-400 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
//       <div className="flex-auto my-auto max-md:max-w-full">
//         What is the purpose of the automobile parts selling app?
//       </div>
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fa936a6bf6a442b04c645a71640cd092eeee314f41c599058e5e4c44cc20606?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//         className="shrink-0 aspect-square w-[30px]"
//       />
//     </div>
//   );
// }


// import * as React from "react";

// function MyComponent() {
//   return (
//     <div className="flex gap-5 justify-between w-full max-w-[1375px] max-md:flex-wrap max-md:max-w-full">
//       <div className="flex gap-5 justify-between items-center text-lg font-medium max-md:flex-wrap max-md:max-w-full">
//         <div className="flex gap-3.5 self-stretch px-9 py-6 bg-amber-500 max-md:px-5">
//           <div className="grow">ALL CATEGORIES</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/d28a7a73318630afda323d1892b7d2f92fbf97fd19b53c38b1172b304d413cea?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//             className="shrink-0 self-start w-6 aspect-square"
//           />
//         </div>
//         <div className="self-stretch my-auto text-amber-500">Home</div>
//         <div className="self-stretch my-auto">About Us</div>
//       </div>
//       <div className="flex gap-2 px-5 py-2 my-auto text-base whitespace-nowrap bg-gray-700 border border-amber-500 border-solid rounded-[40px] max-md:pl-5">
//         <div className="flex gap-1">
//           <div className="grow">USD</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/d28a7a73318630afda323d1892b7d2f92fbf97fd19b53c38b1172b304d413cea?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//             className="shrink-0 w-6 aspect-square"
//           />
//         </div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/59fa402c24a78747bcaae880500eb1bef110601b130483b8fd581e42b035d153?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//           className="shrink-0 self-start w-px border border-white border-solid aspect-[0.04] stroke-[1px] stroke-white"
//         />
//         <div className="flex gap-1">
//           <div className="grow my-auto">English</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/d28a7a73318630afda323d1892b7d2f92fbf97fd19b53c38b1172b304d413cea?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
//             className="shrink-0 w-6 aspect-square"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



// all categories

{/* <div className="flex gap-3.5 self-stretch px-9 py-6 bg-amber-500 max-md:px-5">
<div className="grow">ALL CATEGORIES</div>
<img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d28a7a73318630afda323d1892b7d2f92fbf97fd19b53c38b1172b304d413cea?apiKey=97bd60a383fa4df4a87dc42761361ab7&"
  className="shrink-0 self-start w-6 aspect-square"
/>
</div> */}
