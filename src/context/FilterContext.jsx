import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers";

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function FetchProducts(list) {
        dispatch({
            type: 'PRODUCT_LIST',
            payload: list
        })
    }
    //"in_stock""best_seller"

    const rerenderedProductList = state.productList;
    const value = {
        state,
        dispatch,
        FetchProducts,
        productList: rerenderedProductList,
        cartList: state.cartList,
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}