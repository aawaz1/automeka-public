import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";


const useProductDetails = (id) => {
    const [products , setProducts] = useState([]);
    const getAllFeaturedProducts = async () => {
        try {
          const { data } = await axios.get(
            BASE_URL + `/product/${id}`
          );
          setProducts(data.data);
        } catch (error) {}
      };
    
      useEffect(() => {
        getAllFeaturedProducts();
      }, []);


    return products
}


export default useProductDetails;