import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
const useComingSoonProducts = () => {
    const [products , setProducts] = useState([]);
   
      
      const getAllComingSoonProducts = async () => {
        try {
          const { data } = await axios.get(
            `https://restapi.ansoftt.com:4321/v1/product?coming_soon=true`
          );
          setProducts(data.data);
         
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getAllComingSoonProducts();
      }, []);


    return products

 }


 export default useComingSoonProducts;