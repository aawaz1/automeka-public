import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";


const useTopRatedProducts = () => {
  const [products, setProducts] = useState([]);
  const getTopRatedProducts = async () => {
    try {
      const { data } = await axios.get(
        BASE_URL + `/product/topselling`
      );
      setProducts(data.data);
    } catch (error) { }
  };

  useEffect(() => {
    getTopRatedProducts();
  }, []);


  return products
}


export default useTopRatedProducts;