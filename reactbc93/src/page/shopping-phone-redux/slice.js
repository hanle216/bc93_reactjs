import data from "./data.json";
import {} from "@reduxjs/toolkit";

const initialState = {
  listPhone: [],
  selectedPhone: null,
  carts: [],
};
const shoppingPhoneSlice = createSlice({
    name:"shoppingPhoneSlice",
    initialState,
    reducers:{}
})