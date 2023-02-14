import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MENUAPI from "./API/MenuApi";

// get ALL PIZZA
export const GetAllItems = createAsyncThunk("api/pizzas", async (thunkAPI) => {
  try {
    return MENUAPI.GetAllItems();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// get Featured items

export const FeaturedItems = createAsyncThunk(
  "/api/featured",
  async (thunkAPI) => {
    try {
      return MENUAPI.GetFeaturedItems();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get item by id

export const GetItemById = createAsyncThunk(
  "api/itemid",
  async (id, thunkAPI) => {
    try {
      return MENUAPI.GetItemById(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get items by type

export const GetItemsByType = createAsyncThunk(
  "api/itemsbytype",
  async (input, thunkAPI) => {
    try {
      return MENUAPI.GetItemByType(input);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get releated items

export const GetReleatedItems = createAsyncThunk(
  "api/releateditems",
  async (input, thunkAPI) => {
    try {
      return MENUAPI.GetReleateditems(input);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  menu: [],
  featuredItems: [],
  releateditems: [],
  SingleItem: {},
  isLoading: false,
  isError: null,
};

const GetDataSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get all items
      .addCase(GetAllItems.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(GetAllItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menu = action.payload;
      })
      .addCase(GetAllItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })

      // get featured items
      .addCase(FeaturedItems.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(FeaturedItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featuredItems = action.payload;
      })
      .addCase(FeaturedItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })

      // get item by id
      .addCase(GetItemById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(GetItemById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.SingleItem = action.payload;
      })
      .addCase(GetItemById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      // getitems by type
      .addCase(GetItemsByType.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(GetItemsByType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menu = action.payload;
      })
      .addCase(GetItemsByType.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })

      // get releated items
      .addCase(GetReleatedItems.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(GetReleatedItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.releateditems = action.payload;
      })
      .addCase(GetReleatedItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

// export const {} = GetDataSlice.actions;

export default GetDataSlice.reducer;
