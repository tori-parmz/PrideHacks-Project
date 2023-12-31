import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const albumApi =
//   "https://64659acb228bd07b354e1cfd.mockapi.io/mycollection/album";

// export const getCollectionItems = createAsyncThunk(
//   "collection/getCollectionItems",
//   async () => {
//     try {
//       const response = await fetch(albumApi);
//       console.log(response);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const postAlbumReview = createAsyncThunk(
//   "collection/postAlbumReview",
//   async (newReview) => {
//     try {
//       let response = await fetch(albumApi, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newReview),
//       });
//       return await response.json(); // parse the response body as JSON
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );

// export const updatePost = createAsyncThunk(
//   "collection/updatePost",
//   async (updatedObject) => { //receives the updatedObject that holds the id and updatedCollection
//     try {
//       const response = await fetch(albumApi + `/${updatedObject.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedObject.updatedCollectionItem),
//       });

//       const data = await response.json();  // parse the response body as JSON

//       return { id: updatedObject.id, updatedPost: data }; // a destructured object that holds the id and the new data
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
// );

// export const deleteAlbum = createAsyncThunk(
//   "collection/deleteAlbum",
//   async (id) => {
//     try {
//       const response = await fetch(albumApi + `/${id}`, {
//         //deletes category by its ID
//         method: "DELETE",
//       });

//       return response.json();  // parse the response body as JSON
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );

//initial state
const initialState = {
  communities: [],
};

const communitiesSlice = createSlice({
  name: "communities",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    //handles HTTP requests
    builder
      .addCase(getCollectionItems.fulfilled, (state, action) => { //checks that GET is fulfilled, updates state
        //called in a useEffect on App.js to fill the collectionItems array with API data
        console.log(action);
        state.collectionItems = action.payload;
        state.loadingCollection = false;
      })

      .addCase(getCollectionItems.pending, (state) => { //loading status
        state.loadingCollection = true;
      })

      .addCase(getCollectionItems.rejected, (state) => { //loasing status
        state.loadingCollection = false;
      })

      .addCase(postAlbumReview.fulfilled, (state, action) => { //checks that POST is fulfilled, updates state
        console.log(action);
        state.collectionItems.push(action.payload); //pushes new data to the array
      })

      .addCase(updatePost.fulfilled, (state, action) => { //checks that PUT is fulfilled, updates state
        console.log(action);
        const { id, updatedPost } = action.payload; //destructures the object from the payload
        const index = state.collectionItems.findIndex((item) => item.id === id); //finds the item in state that matches the id
        if (index !== -1) {
          state.collectionItems[index] = updatedPost; //replaces that item with updated post
        }
      })

      .addCase(deleteAlbum.fulfilled, (state, action) => { //checks that DELETE is fulfilled, updates state
        console.log(action);
        // Remove the deleted album from the collectionItems array by filtering out the id
        state.collectionItems = state.collectionItems.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export const { calculateTotal } = communitiesSlice.actions;

export default communitiesSlice.reducer;
