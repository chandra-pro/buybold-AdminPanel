import { commonrequest } from "./ApiCall";
import { BASE_URL } from "../env";



export const registerfunction = async(data)=>{
    return await commonrequest("POST",`${BASE_URL}user/register`,data)
}

export const sentOtpFunction = async(data)=>{
    return await commonrequest("POST",`${BASE_URL}user/sendotp`,data)
}

export const userVerify = async(data)=>{
    return await commonrequest("POST",`${BASE_URL}user/login`,data)
}
export const adminVerify = async(data)=>{
    return await commonrequest("POST",`${BASE_URL}admin/login`,data)
}
// export const addproduct = async(data)=>{
//     return await commonrequest("POST",`${BASE_URL}/user/addproduct`,data)
// }