import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import { BASE_URL, BASE_URLL } from '../../constants';

const baseQuery = fetchBaseQuery({baseUrl : BASE_URLL});

export const apiSlice = createApi({
  baseQuery,
 tagTypes : ['product', "Order", 'User'],
 endpoints : (builder) => ({}) 
})