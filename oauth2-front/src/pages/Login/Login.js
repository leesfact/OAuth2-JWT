import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { SiNaver } from 'react-icons/si';


const Login = () => {


    const navigate = useNavigate();

    const googleAuthClickHandle = () => {
        window.location.href="http://localhost:8080/oauth2/authorization/google";
    }

    const naverAuthClickHandle = () => {
        window.location.href="http://localhost:8080/oauth2/authorization/naver";
    }

    return (
        <div>
            <input type="text" placeholder='email' />
            <input type="password" placeholder='password' />
            <button>로그인</button>
            <button onClick={googleAuthClickHandle}><FcGoogle /></button>
            <button onClick={naverAuthClickHandle}><SiNaver/></button>
        </div>
    );
};

export default Login;