import React, { useState, useEffect } from 'react';
import { auth } from './utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from './logo.svg';
import './App.css';
import LoggedIn from './components/LoggedIn';
import Login from './components/Login';

function App() {

	const [user] = useAuthState(auth);

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
