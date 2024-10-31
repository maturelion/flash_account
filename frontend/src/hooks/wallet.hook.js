import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const endPoint = process.env.REACT_APP_API_URL

export const useGetWallet = () => {
    const authUser = JSON.parse(localStorage.getItem("user"))
    return useQuery({
        queryKey: ["wallet"],
        queryFn: async () => {
            const res = await axios.get(
                `${endPoint}/wallets/?user=${authUser.pk}`,
                {
                    headers: {
                      // 'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem("token")}`
                    },
                  }
              )
              return res.data[0]
        }
    })
}