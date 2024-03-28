

export const getOrderDetails = (data={}) => {
    return (state, dispatch) => {
        APICALL.then(data => {
            dispatch(setOrderDetail(data.dta))
        })
    }
}