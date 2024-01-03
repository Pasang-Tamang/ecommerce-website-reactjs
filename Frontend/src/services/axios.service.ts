import axios from "axios";

import { config } from "../config";
import { errorToast } from "./toast.service";

export const postData = async (url: string, data: any) => {
  try {
    const response = await axios.post(`${config.SERVER_URL}${url}`, data);
    return response.data;
  } catch (error: any) {
    //console.log(error.response.data.error)
    errorToast(error.response.data.error);
  }
};


export const getData = async(url:string) => {
  const{data} = await axios.get(`${config.SERVER_URL}${url}`)
  //console.log(data)
  return data
}


export const deleteData = async (url:string, id:number, jwt:any) => {
  try {
    const response = await axios.delete(`${config.SERVER_URL}${url}${id}`, {
      headers:{
        Authorization:`Bearer ${jwt}`
      }
    }  )
    return response.data
  } catch (error:any) {
    errorToast(error.response.data.error)
  }
  
}
