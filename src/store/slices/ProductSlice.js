import { configureStore, createSelector, createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    ProductList: [],
   
  },
  reducers: {
    FetchProducts(state, action) {
      state.ProductList = action.payload;
    },
    setProductList: (state, action) => {
      state.productList = action.payload;
    },

  

  }
})

const store = configureStore({
  reducer: ProductSlice.reducer
})

export const selectProductList = (state) => state.ProductList;

export const selectFilteredProducts = createSelector(
  selectProductList,
  (ProductList) => {
    let filteredList = [...ProductList];

   
    // Apply other filters here

    return filteredList;
  }

)



export const { FetchProducts,  setProductList } = ProductSlice.actions
export { store }