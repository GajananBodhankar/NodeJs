import express from 'express';
let app = express();
app.use(express.json());

app.get('/', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 5000; i++) {
        sum += i
    }
    res.send(`${sum}`)
})

app.listen(3000, () => {
    console.log("App is running")
})

export default app;