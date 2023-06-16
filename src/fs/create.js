import fs, { access, writeFile } from "fs/promises";
import { join } from "path";

const create = async () => {
    try {
        const filePath = join("src/fs", "files", "fresh.txt");
        let fileExists = await checkFileExists(filePath);
        if (fileExists) {
            throw new Error("FS operation failed: File already exists");
        } else {
            await writeFile(filePath, "I am fresh and young");
            console.log("File created successfully.");
            fileExists = true;
        }
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

await create();