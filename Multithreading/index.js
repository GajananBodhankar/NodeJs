import express from 'express'
import {
    Worker
} from 'worker_threads'
let PORT = process.env.PORT || 3000;

let app = express();
app.use(express.json())

app.get('/non-blocking', (req, res) => {
    res.json({
        Message: "non blocking"
    })
})

app.get('/blocking', (req, res) => {
    const worker = new Worker('./worker.js')
    worker.on('message', (data) => {
        res.json({
            Message: `Count is ${data}`
        })
    })
})

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})