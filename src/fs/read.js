import { promises as fsPromises} from 'fs';
import path from 'path';
import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
   try{
      const fileContent = await fsPromises.readFile(fileToRead, 'utf8')
      console.log(fileContent);
   }catch{
    throw new Error('FS operation failed');
   }
};

await read();