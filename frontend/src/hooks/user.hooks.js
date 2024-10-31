import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { slugify } from "../helper"


export const useGetUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const authUser = JSON.parse(localStorage.getItem("user"))
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/users/${slugify(authUser.username)}/`,
                {headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                    
                  },}
              )
              return res.data
        }
    })
}