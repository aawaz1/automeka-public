import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";


const useCategory = () => {
    const [categories ,setCategories] = useState([]);
    const getAllCategories = async () => {
        try {
          const { data } = await axios.get(
            BASE_URL + `/category`
          );
          setCategories(data.data);
        } catch (error) {}
      };
    
      useEffect(() => {
        getAllCategories();
      }, []);


    return categories
}

export default useCategory;