import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const endPoint = process.env.REACT_APP_API_URL;

export const useGetActivities = () => {
    return useQuery({
        queryKey: ["activities"],
        queryFn: async () => {
            const authUser = JSON.parse(localStorage.getItem("user"))
            const res = await axios.get(
                `${endPoint}/activities/?user=${authUser.pk}`,
                {
                    headers: {
                      // 'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem("token")}`
                    },
                  }
              )
              return res.data
        }
    })
}

export const useAddActivities = () => {
    const navigate = useNavigate()
    return useMutation({
        mutationKey: ["add-activity"],
        mutationFn: async (data) => {
            const res = await axios.post(
                `${endPoint}/activities/`,
                data,
                {
                    headers: {
                      'Authorization': `Bearer ${localStorage.getItem("token")}`
                    },
                  }
              )
              return res.data
        },
        onSuccess: () => {
            navigate("/dashboard")
        }
    })
}