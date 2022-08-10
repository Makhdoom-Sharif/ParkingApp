import { loginFail, loginStart, loginSuccess, registerFail, registerStart, registerSuccess } from "./redux/action"
import { publicRequest } from './requestMethod'




export const login = async (dispatch, Data) => {
    dispatch(loginStart())
    try {
        const { data } = await publicRequest.post("/auth/login", Data)
        // console.log("res==>", data)
        dispatch(loginSuccess(data))
    } catch (e) {
        dispatch(loginFail(e.response.data))
    }
}



export const register = async (dispatch, Data) => {
    dispatch(registerStart())
    try {
        const { data } = await publicRequest.post("/auth/register", Data)
        // console.log("res==>", data)
        dispatch(registerSuccess(data))
    } catch (e) {

        console.log(e.response.data.code)
        dispatch(e.response.data.code === 11000 ? registerFail("Email / Contact no. already in use") : registerFail("Error occured"))
    }
}