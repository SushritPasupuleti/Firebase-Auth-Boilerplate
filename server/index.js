require('dotenv').config()
const cors = require('cors');
const express = require('express')
const { default: helmet } = require('helmet')
const app = express()
const port = 5000

app.use(helmet())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const tokenVerifyMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
    next();
}

app.use(tokenVerifyMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/onboarding', tokenVerifyMiddleware, (req, res) => {
    console.log("Message: ", req.body.message);
})

app.listen(port, () => {
    console.log(`API Server listening on port ${port}`)
})