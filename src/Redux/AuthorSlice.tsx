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
            state.authorModelData.push(action.payload)
           
          },
          removeauthor(state, action: PayloadAction<string>) {
          },
       
    }
})

export default authorSlice;
export const {addAuthor, removeauthor} = authorSlice.actions
