export const filterReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case "PRODUCT_LIST":
            return { ...state, productList: payload }
        default:
            throw new Error("No Case Found!");
    }
}