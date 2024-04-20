import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
export const { setUserCredentials , logout} = userSlice.actions;

export default userSlice.reducer;
