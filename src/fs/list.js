import { readdir, stat } from "fs/promises";
import { join } from "path";

const list = async () => {
  try {
    const folderPath = join("src/fs", "files");

    const folderExists = await checkDirectoryExists(folderPath);
    if (!folderExists) {
      throw new Error("FS operation failed: Folder does not exist");
    }

    const files = await readdir(folderPath);
    files.forEach((file) => {
      console.log(file);
    });
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
await list();
