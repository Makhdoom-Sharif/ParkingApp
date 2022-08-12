import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
// export const getAllLocalData = () => {
// let TOKEN;
// };
// export const GetTokenLocal = async (Data) => {
//   // let user = await JSON.parse(localStorage.getItem("persist:root"))?.user;
//   // let currentUser = (await user) && JSON.parse(user);
//   AccessTOKEN = Data
//   // console.log("t==>", TOKEN);
// };
// console.log("out==>", TOKEN);
// let AccessTOKEN = TOKEN;

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: { token: `Bearer ${AccessTOKEN}` },
// });
// export const CallT = () => {
//   // console.log("Out==>", TOKEN);
// };

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
