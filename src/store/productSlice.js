import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "IDLE",
  ERROR: "error",
  LOADING: "Loading"
});
const productSlice = createSlice({
  name: "prouct",
  initialState: {
    data: [],
    status: STATUSES.IDLE
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// thunk

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return data;
});

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch, getState) {

//     dispatch(setStatus(STATUSES.LOADING));

//     try {
//       const res = await fetch("https://fakestoreapi.com/products/");
//       const data = await res.json();
//       dispatch(setProducts(data));
//     } catch (err) {
//       console.log(err);
//       dispatch(setProducts(STATUSES.ERROR));
//     }
//   };
// }
