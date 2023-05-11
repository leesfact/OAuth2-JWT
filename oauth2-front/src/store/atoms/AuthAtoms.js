import { atom } from "recoil";


// 전역상태 
export const authenticationState = atom({
    key:"authenticationState",
    default : false
});