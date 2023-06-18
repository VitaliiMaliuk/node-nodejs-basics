import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { createGunzip } from "zlib";

const decompress = async () => {
  const compressedFile = join("src/zip/files", "archive.gz");
  const decompressedFile = join("src/zip/files", "fileToCompress.txt");

  const readStream = createReadStream(compressedFile);
  const writeStream = createWriteStream(decompressedFile);
  const gunzipStream = createGunzip();

  await new Promise((resolve, reject) => {
    readStream
      .pipe(gunzipStream)
      .pipe(writeStream)
      .on("finish", resolve)
      .on("error", reject);
  });

  console.log(
    `File ${compressedFile} decompressed to ${decompressedFile}`
  );
};

await decompress();
