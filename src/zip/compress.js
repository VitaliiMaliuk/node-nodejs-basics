import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { createGzip } from "zlib";

const compress = async () => {
  const fileToCompress = join("src/zip/files", "fileToCompress.txt");
  const compressedFile = join("src/zip/files", "archive.gz");

  const readStream = createReadStream(fileToCompress);
  const writeStream = createWriteStream(compressedFile);
  const zpipStream = createGzip();

  await new Promise((resolve, reject) => {
    readStream
      .pipe(zpipStream)
      .pipe(writeStream)
      .on("finish", resolve)
      .on("error", reject);
  });

  console.log(`File ${fileToCompress} compressed to ${compressedFile}`);
};

await compress();
