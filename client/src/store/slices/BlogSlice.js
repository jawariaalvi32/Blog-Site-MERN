import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchBlog = createAsyncThunk(
//     'fetchblogs',
//     async (data, thunkAPI) => {
//     const response = await fetch('http://localhost:4000/api/posts/')
//     return await response.json()
//     }
// )

export const fetchSingleBlog = createAsyncThunk(
    'fetchsingleblog',
    async (data, thunkAPI) => {
    const response = await fetch('http://localhost:4000/api' + data)
    return await response.json()
    }
)

export const fetchBlogs = createAsyncThunk(
    'fetchBlogs',
    async (data, thunkAPI) => {
    const response = await fetch('http://localhost:4000/api/posts/')
    return await response.json()
    }
)

export const postSlice = createSlice({
    name: 'blog',
    initialState: [],
    reducers: {
        savePost( state, action ) {
            console.log(action.payload.name)
            return { 
                blog: action.payload.blog,
                author: action.payload.user
            }
        }  
    },
    extraReducers: {
        [fetchBlogs.fulfilled] : (state, action) =>{
            console.log(action.payload)
            return action.payload
       },
       [fetchSingleBlog.fulfilled] : (state, action) =>{
           console.log(action.payload)
            return action.payload
   },
    }
})

export const { savePost } = postSlice.actions;
export default postSlice.reducer



// We can return directly it will set in state but if we have multiple properties set data by yourself