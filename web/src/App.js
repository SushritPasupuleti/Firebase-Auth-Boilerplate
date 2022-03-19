import React, { useState, useEffect } from 'react';
import { auth } from './utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from './logo.svg';
import './App.css';
import LoggedIn from './components/LoggedIn';
import Login from './components/Login';

function App() {

	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			console.log('user', user);
			/// in case of phone number authentication
			/// user data will include only `phoneNumber`.
			/// this info should be sent as a payload to your server
			/// along with `accessToken` in the Authorization Header
			/// to register the user.
		}
	}, [user])
	

	return (
		// if user session exists show
		// logged in component
		// else show login component
		user ?
			(<LoggedIn />) : (<Login />)
		// <div>
		// 	<Login />
		// </div>
	);
}

export default App;
