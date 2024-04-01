import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";


const useFeaturedProducts = (keyword) => {
  const [products, setProducts] = useState([]);
  const getAllFeaturedProducts = async () => {
    try {
      const { data } = await axios.get(
        BASE_URL + `/product?name=${keyword || ""}`
      );
      setProducts(data.data);
    } catch (error) { }
  };

  useEffect(() => {
    getAllFeaturedProducts();
  }, [keyword]);


  return products
}


export default useFeaturedProducts;