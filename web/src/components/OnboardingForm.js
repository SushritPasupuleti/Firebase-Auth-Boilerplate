import React from 'react'

function OnboardingForm() {
    return (
        <div style={{
            margin: '2rem',
            marginTop: 100,
            border: '1px solid red',
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
            </center>
        </div>
    )
}

export default OnboardingForm