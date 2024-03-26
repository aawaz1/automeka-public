import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

const useBrands = () => {
     const [brands, setBrands] = useState([])

    useEffect(() => {
        const getAllBrands = async () => {
            try {
                const { data } = await axios.get(
                    BASE_URL + `/brand/`
                );
                setBrands(data?.data);

            } catch (error) {
                console.error("Error fetching brands:", error);
            }
        }
        getAllBrands();
    }, []);

  return brands
}

export default useBrands;