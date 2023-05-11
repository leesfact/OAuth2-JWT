import React from 'react';
import { useRecoilState } from 'recoil';
import { authenticationState } from '../../store/atoms/AuthAtoms';

const Index = () => {

    const [ authState, setAuthState ] = useRecoilState(authenticationState);

    return (
        <div>
           {authState ? "인증됨" : "인증안됨"} 
        </div>
    );
};

export default Index;