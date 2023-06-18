import { createWriteStream } from "fs";
import { join } from "path";

const write = async () => {
  const filePath = join("src/streams/files", "fileToWrite.txt");
  const writableStream = createWriteStream(filePath);
  process.stdout.pipe(writableStream);
  console.log(`Writing data from process.stdin to ${filePath}`);
  writableStream.on("finish", () => {
    console.log(`Data has been written to ${filePath}`);
  });
};

await write();
