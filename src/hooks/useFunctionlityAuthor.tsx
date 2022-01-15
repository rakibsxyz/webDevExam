import axios from 'axios';
import React from 'react'
import { ApiResponseModel, AuthorModel } from '../models';


function useFunctionlityAuthor() {

    const onGetAuthor = React.useCallback((skip:number,limit:number ) => {
      
        const url  = `https://api.quotable.io/authors?limit=${limit}&skip=${skip}`
        return axios.get<ApiResponseModel>(url)
          .then((r) => {
          console.log("data", r.data.results)
          })
          .catch((e) => {
           
          });
      }, []);

      return {
        onGetAuthor
      }
}

export default useFunctionlityAuthor
