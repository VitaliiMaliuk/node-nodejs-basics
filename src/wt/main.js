import { Worker } from "worker_threads";
import { cpus } from "os";
const workerScriptPath = "./src/wt/worker.js";

const performCalculations = async () => {
  const numCores = cpus().length;
  const workerPromises = [];

  for (let i = 0; i < numCores; i++) {
    const workerData = i + 10;
    const workerPromise = new Promise((resolve) => {
      const worker = new Worker(workerScriptPath, { workerData });

      worker.on("message", (result) => {
        resolve({ status: "resolved", data: result });
      });

      worker.on("error", (error) => {
        console.error(`Worker ${i} encountered an error:`, error);
        resolve({ status: "error", data: null });
      });
    });
    workerPromises.push(workerPromise);
  }
  const result = await Promise.all(workerPromises);
  console.log(result);
};

await performCalculations();
