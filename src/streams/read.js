import {createReadStream} from 'fs';
import path from 'path';

import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const readStream = createReadStream(fileToRead)


const read = async () => {
  readStream.pipe(process.stdout)
  // const chunks = [];

  // readStream.on('readable', () => {
  //   let chunk;
  //   while (null !== (chunk = readStream.read())) {
  //     chunks.push(chunk);
  //   }
  // });
  
  // readStream.on('end', () => {
  //   const content = chunks.join('');
  //   console.log(content);
  // });
};


await read();

