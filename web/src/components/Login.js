import React, { useState } from 'react';
import { app, auth } from '../utils/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Login = () => {
    // Inputs
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    // Sent OTP
    const signin = () => {

        if (phoneNumber === "" || phoneNumber.length < 10) return;

        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
        const appVerifier = window.recaptchaVerifier;

        // let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');

        // auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
        //     setfinal(result);
        //     alert("code sent")
        //     setshow(true);
        // })
        //     .catch((err) => {
        //         alert(err);
        //         window.location.reload()
        //     });

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                alert("code sent")
                setshow(true);
                setfinal(confirmationResult);
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                alert(error);
            });
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success
            alert("success");
            console.log("code success", auth);
        }).catch((err) => {
            alert("Wrong code");
        })
    }

    return (
        <div style={{ "marginTop": "200px" }}>
            <center>
                <div style={{ display: !show ? "block" : "none" }}>
                    <input value={phoneNumber} onChange={(e) => {
                        setPhoneNumber(e.target.value)
                    }}
                        placeholder="phone number" />
                    <br /><br />
                    <div id="recaptcha-container"></div>
                    <button onClick={signin}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <input type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
                    <br /><br />
                    <button onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
        </div>
    );
}

export default Login;