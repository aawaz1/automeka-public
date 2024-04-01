import { ADDRESS_URL } from '../../constants';
import { apiSlice } from './api-slice'


export const addressApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        create: builder.mutation({
            query: (data) => ({
                url: `${ADDRESS_URL}`,
                method: 'POST',
                body: data
            }),


        }),
        update: builder.mutation({
            query: ({ id, data }) => ({
                url: `${ADDRESS_URL}/${id}`,
                method: 'PATCH',
                body: data
            })
        })



    })

})



export const { useCreateMutation, useUpdateMutation } = addressApiSlice