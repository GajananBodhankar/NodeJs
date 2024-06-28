import express from 'express'
let PORT = process.env.PORT || 3000;

let app = express();
app.use(express.json())

app.get('/non-blocking', (req, res) => {
    res.json({
        Message: "non blocking"
    })
})

app.get('/blocking', (req, res) => {
    let count = 0;
    for (let i = 0; i < 300000000000; i++) {
        count++
    }
    res.json({
        Message: `Count is ${count}`
    })
})

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})