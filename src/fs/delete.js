import { unlink, access } from "fs/promises";
import { join } from "path";

const remove = async () => {
    try {
        const filePath = join("src/fs/files", "fileToRemove.txt");

        const fileExists = await checkFileExists(filePath);
        if (!fileExists) {
            throw new Error("FS operation failed: File does not exist");
        }

        await unlink(filePath);
        console.log("File deleted successfully.");
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
await remove();