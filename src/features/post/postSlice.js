import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios  from 'axios'
const initialState = {
    posts: [],
}
export const getPosts =createAsyncThunk('posts/getPosts',async (_,{rejectWithValue,dispatch})=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch(setPosts(res.data))
})

export const removePosts =createAsyncThunk(
    'posts/removePosts',
    async (id,{rejectWithValue,dispatch})=>{
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(removePost(id))
    }
)

export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        setPosts: (state,actions)=>{
            state.posts=actions.payload
         
        },
        removePost: (state,actions)=>{
            state.posts=state.posts.filter(post=>post.id !== actions.payload)
        }
    },
    extraReducers:{
        // при успехе запроса
        [getPosts.fulfilled]:()=>{console.log('fulfilled')},
        // идет запрос
        [getPosts.pending]:()=>{console.log('pending')},
        // при ошибки
        [getPosts.rejected]:()=>{console.log('rejected')},

        [removePosts.fulfilled]:()=>{console.log('fulfilled')},
        [removePosts.pending]:()=>{console.log('pending')},
        [removePosts.rejected]:()=>{console.log('rejected')},
    }
})

export const {setPosts,removePost}= postSlice.actions
export default postSlice.reducer