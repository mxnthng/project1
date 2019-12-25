import React from 'react';
import SignIn from '../Components/Signin/Signin';
import SignUp from '../Components/Signup/Signup';
import MainMenu from '../Components/MainMenu/MainMenu';
import TabArena from '../Components/TabArea/TabArea';
import ChatArea from '../Components/ChatArea/ChatArea';

const routes = [
    {
        path : '',
        exact : true,
        main : () => <SignIn />
    },
    {
        path : '/signup',
        exact : true,
        main : () => <SignUp />
    },
    {
        path : '/home',
        exact : false,
        main : () => <MainMenu />
    }
];

export default routes;