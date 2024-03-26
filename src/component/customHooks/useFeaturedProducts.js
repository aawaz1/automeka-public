import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";


const useFeaturedProducts = () => {
    const [products , setProducts] = useState([]);
    const getAllFeaturedProducts = async () => {
        try {
          const { data } = await axios.get(
            BASE_URL + `/product`
          );
          setProducts(data.data);
        } catch (error) {}
      };
    
      useEffect(() => {
        getAllFeaturedProducts();
      }, []);


    return products
}


export default useFeaturedProducts;