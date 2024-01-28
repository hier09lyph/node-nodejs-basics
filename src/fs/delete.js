import { promises as fsPromises} from 'fs';
import path from 'path';
import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
   try{
await fsPromises.rm(fileToRemove)
   }catch{
    throw new Error('FS operation failed');
   }
};

await remove();