import { promises as fsPromises} from 'fs';
import path from 'path';
import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
         await fsPromises.writeFile(filePath, 'I am fresh and young',{flag: 'wx'});
         console.log('File created successfully: fresh.txt');
    } catch {
                throw new Error('FS operation failed');
        }
    }

await create()