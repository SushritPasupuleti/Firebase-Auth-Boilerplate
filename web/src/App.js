import React, { useState, useEffect } from 'react';
import { auth } from './utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from './logo.svg';
import './App.css';
import LoggedIn from './components/LoggedIn';
import Login from './components/Login';
import OnboardingForm from './components/OnboardingForm';

function App() {

	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			/// save object to local storage or Redux State for easy acess
			console.log('user', user);
			/// in case of phone number authentication
			/// user data will include only `phoneNumber`.
			/// this info should be sent as a payload to your server
			/// along with `accessToken` in the Authorization Header
			/// to register the user.
		}
	}, [user])


	if (user) {
		return (
			<div>
				<LoggedIn />
				{
					user.email === null && (
						/// only displayed if user has not filled onboarding form
						<OnboardingForm />
					)
				}
			</div>
		)
	}

	return (
		<Login />
	)
}

export default App;
