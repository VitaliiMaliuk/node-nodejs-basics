import { mkdir, readdir, copyFile, stat } from "fs/promises";
import { join } from "path";

const copy = async () => {
  try {
    const sourcePath = join("src/fs", "files");
    const destinationPath = join("src/fs", "files_copy");

    const sourceExists = await checkDirectoryExists(sourcePath);
    if (!sourceExists) {
      throw new Error("FS operation failed: Source folder does not exist");
    }

    const destinationExists = await checkDirectoryExists(destinationPath);
    if (destinationExists) {
      throw new Error("FS operation failed: Destination folder already exists");
    }

    await mkdir(destinationPath);

    const files = await readdir(sourcePath);
    
    for (const file of files) {
      const sourceFile = join(sourcePath, file);
      const destinationFile = join(destinationPath, file);
      await copyFile(sourceFile, destinationFile);
    }
    console.log("Folder copied successfully.");
  } catch (error) {
    console.error(error.message);
  }
};

const checkDirectoryExists = async (directoryPath) => {
  try {
    const stats = await stat(directoryPath);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};
await copy();
