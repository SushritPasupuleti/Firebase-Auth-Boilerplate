import React from 'react'
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function OnboardingForm() {
    const [user] = useAuthState(auth);

    const sendOnboardingInfo = async () => {
        console.log("pinging server");
        fetch(`${process.env.REACT_APP_API_URL}api/onboarding`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.accessToken}`,
            },
            body: JSON.stringify({
                message: "hello there",
            })
        })
    }

    return (
        <div style={{
            margin: '2rem',
            marginTop: 100,
            border: '1px solid red',
            padding: '1rem',
        }}>
            <center>
                <h4>
                    OnboardingForm
                </h4>
                <p>
                    User will be prompted to enter additional info like email, full name after first signup.
                    <br />
                    <br />
                    Data will be submitted to API once form is submitted and the `user` table will be augmented with these details.
                    <br />
                    <br />
                    This form will not be displayed once user has submitted the info and server has accepted it.
                </p>
                <button
                    onClick={() => sendOnboardingInfo()}
                >
                    Submit Form (Dummy)
                </button>
            </center>
        </div>
    )
}

export default OnboardingForm