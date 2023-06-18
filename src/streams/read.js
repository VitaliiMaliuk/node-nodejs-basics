import { createReadStream } from "fs";
import { join } from "path";

const read = async () => {
  const filePath = join("src/streams/files", "fileToRead.txt");
  const readableStream = createReadStream(filePath);
  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
  readableStream.on("end", () => {
    process.stdout.write("\n");
  });
  readableStream.on("error", (error) => {
    throw new Error("FS operation failed: " + error.message);
  });
};

await read();
