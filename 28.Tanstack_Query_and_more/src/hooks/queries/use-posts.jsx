import axios from "axios"
import { BACKEND_URL } from "../../const"
import { useQuery } from "@tanstack/react-query"


export const usePosts =()=>{
    return useQuery({
        queryKey:['Posts'],
        queryFn:fetchPosts
    })
    }
const fetchPosts= async ()=> {
    const response = await axios.get(BACKEND_URL);
    return response.data
}

