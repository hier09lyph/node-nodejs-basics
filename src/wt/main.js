import path from 'path';
import { getDirnameFromUrl } from '../utils/utils.js'
import { Worker } from 'worker_threads';
import { availableParallelism } from 'os';

const FIRST_NUMBER = 10;

const __dirname = getDirnameFromUrl(import.meta.url)
const workerScript = path.join(__dirname, 'worker.js');

const fibinacciWorker = (number) => new Promise(resolve => {
  const worker = new Worker(workerScript, { workerData: number});

  worker.on('message', data => resolve({
    status: 'resolved',
    data
  }))

  worker.on('error', () => resolve({
    status: 'error',
    data: null
  }))
})

const performCalculations = async () => {
    const workersPool = Array.from({length: availableParallelism}, (_, i) => fibinacciWorker(FIRST_NUMBER + i))
    const result = await Promise.all(workersPool)
    console.log(result);
};

await performCalculations();