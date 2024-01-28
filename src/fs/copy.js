import { promises as fsPromises} from 'fs';
import path from 'path';
import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const sourcePath = path.join(__dirname, 'files');
const destinationPath = path.join(__dirname, 'files_copy');

const copy = async () => {
   try{
await fsPromises.cp(sourcePath, destinationPath, {force: false, errorOnExist:true, recursive: true})
   }catch{
    throw new Error('FS operation failed');
   }
};

await copy();
