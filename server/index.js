require('dotenv').config()
const cors = require('cors');
const express = require('express')
const { default: helmet } = require('helmet')
const firebaseAdmin = require('./utils/firebase');
const app = express()
const port = 5000

app.use(helmet())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const tokenVerifyMiddleware = async (req, res, next) => {

    console.log('tokenVerifyMiddleware')

    const token = req.headers.authorization;
    // console.log('token: ', token)

    if (token.startsWith('Bearer ')) {
        const idToken = token.split('Bearer ')[1];
        // console.log('idToken: ', idToken)

        try {
            const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
            req.user = decodedToken;
            console.log("Decoded Token: ", decodedToken);
        }

        catch (err) {
            console.log("Invalid token", err);
            res.status(401).json({
                message: 'Invalid token'
            })
        }
    }
    else {
        console.log("No token provided");
        res.status(401).json({
            message: 'No token'
        })
    }
    next();
}

// app.use(tokenVerifyMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!', req.user)
})

app.post('/api/onboarding', tokenVerifyMiddleware, (req, res) => {
    console.log("Message: ", req.body.message);
})

app.listen(port, () => {
    console.log(`API Server listening on port ${port}`)
})