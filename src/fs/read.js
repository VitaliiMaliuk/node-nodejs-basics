import { readFile, access } from "fs/promises";
import { join } from "path";

const read = async () => {
    try {
        const filePath = join("src/fs/files", "fileToRead.txt");

        const fileExists = await checkFileExists(filePath);
        if (!fileExists) {
            throw new Error("FS operation failed: File does not exist");
        }

        const content = await readFile(filePath, "utf-8");
        console.log(content);
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
}
await read();