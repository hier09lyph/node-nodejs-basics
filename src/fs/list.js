import { promises as fsPromises} from 'fs';
import path from 'path';
import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const dirToRead = path.join(__dirname, 'files');

const list = async () => {
   try{
      const fileListInDir = await fsPromises.readdir(dirToRead)
      console.log(fileListInDir);
   }catch{
    throw new Error('FS operation failed');
   }
};

await list();