import api from "./api"

interface LoginParams{
    email: string
    password: string
}

export const authServices = {
    login: async (params: LoginParams) => {
        const res = await api.post('/auth/login', params).catch((error)=>{
            if(error.response.status === 400 || error.response.status === 401) return error
        })
        console.log(res)
        if(!res) return {status: 404, message: 'Email não encontrado'}
        if (res.status === 200){
            localStorage.setItem('house-login', res.data.token)
        }
        return res
    }
}