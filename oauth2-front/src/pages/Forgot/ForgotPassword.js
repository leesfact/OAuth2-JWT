import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

const ForgotPassword = () => {


    const [email, setEmail] = useState("");

    const sendMail = useMutation(async() => {
        const response =await axios.post("http://localhost:8080/mail/send",{email});
        alert(response.data);
        return response;
    });

    const sendMailClickHandle = () => {
        sendMail.mutate();
    }

    const emailInputHandle = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <input type="email" onChange={emailInputHandle} />
            <button onClick={sendMailClickHandle}>메일전송</button>
        </div>
    );
};

export default ForgotPassword;