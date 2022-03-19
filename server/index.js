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

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`API Server listening on port ${port}`)
})