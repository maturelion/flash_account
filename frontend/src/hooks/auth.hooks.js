import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const endPoint = process.env.REACT_APP_API_URL;

export const useLogin = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    return useMutation({
        mutationKey: ["login"],
        mutationFn: async ({id, pass}) => {
            const res = await axios.post(
                `${endPoint}/rest-auth/login/`,
                { username: id, password: pass }
              )
              return res.data
        },
              onSuccess: (data) => {
                console.log(data)
                localStorage.setItem("token", data.access);
                localStorage.setItem("user", JSON.stringify(data.user))
                navigate("/dashboard");
                queryClient.invalidateQueries({ queryKey: ["user"] });
            },
            onError: (error) => {
                console.log(error);
                // toast.error(`${error.data?.message}`);
            },
    })
}