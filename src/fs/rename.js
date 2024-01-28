import { promises as fsPromises} from 'fs';
import path from 'path';
import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const oldFileName = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFileName = path.join(__dirname, 'files','properFilename.md');

const rename = async () => {
   try{
await fsPromises.rename(oldFileName, newFileName)
   }catch{
    throw new Error('FS operation failed');
   }
};

await rename();