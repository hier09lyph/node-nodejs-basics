import {createWriteStream} from 'fs';
import path from 'path';

import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

const writeStream = createWriteStream(fileToWrite)

const write = async () => {
  process.stdin.pipe(writeStream)
};


await write();
