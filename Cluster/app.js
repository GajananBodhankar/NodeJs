import cluster from 'cluster';
import os from 'os'
import express from "express";
let totalCPU = os.cpus().length;
if (cluster.isPrimary) {
    for (let i = 0; i < totalCPU; i++) {
        cluster.fork();
    }
} else {
    let app = express();
    app.get("/", (req, res) => {
        res.json({
            message: `Hello my process id is ${process.pid}`
        })
    })
    let PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log("Listening to port", PORT)
    })
}