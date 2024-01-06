import {server} from "./serverURL";
import { commonAPI } from "./commonApi";

// 1) upload Video 

export const uploadVideo = async(reqBody)=>{
    console.log("=======details======");
    console.log(reqBody);
    return await commonAPI('POST',`${server}/videos`,reqBody)
}