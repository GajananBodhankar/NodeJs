import cluster from 'cluster';
import os from 'os'

let totalCPU=os.cpus().length;

console.log(totalCPU)