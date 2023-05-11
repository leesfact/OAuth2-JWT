import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OAuth2Login = () => {
 
    const navigate = useNavigate();
    const [ searchParams, setSearchParams] = useSearchParams();
    const accessToken = searchParams.get("accessToken");
    

    // !! 해야 정상적으로 형변환이 이루어짐
    if(!!accessToken){
        localStorage.setItem("accessToken", accessToken);
        window.location.replace("/");
    }


    return (
        <></>
    );
};

export default OAuth2Login;