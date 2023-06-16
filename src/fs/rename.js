import { rename as _rename, access } from "fs/promises";
import { join } from "path";

const rename = async () => {
  try {
    const sourceFile = join("src/fs/files", "wrongFilename.txt");
    const destinationFile = join("src/fs/files", "properFilename.md");

    const sourceExists = await checkFileExists(sourceFile);
    if (!sourceExists) {
      throw new Error("FS operation failed: Source file does not exist");
    }

    const destinationExists = await checkFileExists(destinationFile);
    if (destinationExists) {
      throw new Error("FS operation failed: Destination file already exists");
    }

    await _rename(sourceFile, destinationFile);
    console.log("File renamed successfully.");
  } catch (error) {
    console.error(error.message);
  }
};

const checkFileExists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch (error) {
    return false;
  }
};
await rename();
