import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorModel } from "../models";
  
type authorType= {
    authorModelData: AuthorModel[]
}
var authorData:authorType={
  authorModelData:[]
} 
export const authorSlice = createSlice({
    name: 'author',
    initialState: authorData,
    reducers: {
          addAuthor(state, action: PayloadAction<AuthorModel>) {
            console.log("hi: ",action.payload)
            var temp = [...state.authorModelData,action.payload]
            state.authorModelData = temp
           
          },
          removeauthor(state, action: PayloadAction<string>) {
            var index = state.authorModelData.findIndex(item => item._id === action.payload)
            state.authorModelData.splice(index,1)
          },
       
    }
})

export default authorSlice;
export const {addAuthor, removeauthor} = authorSlice.actions
