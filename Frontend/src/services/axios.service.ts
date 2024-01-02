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
