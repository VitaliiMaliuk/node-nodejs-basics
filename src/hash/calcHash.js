import { promises } from "fs";
import { createHash } from "crypto";
import { join } from "path";

const calculateHash = async () => {
  try {
    const filePath = join("src/hash/files", "fileToCalculateHashFor.txt");

    const fileContent = await promises.readFile(filePath);

    const hash = createHash("sha256");
    hash.update(fileContent);
    const hexHash = hash.digest("hex");
    console.log(`SHA256 Hash: ${hexHash}`);
  } catch (error) {
    throw new Error("FS operation failed: " + error.message);
  }
};

await calculateHash().catch((error) => console.error(error));
