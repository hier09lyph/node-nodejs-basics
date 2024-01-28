import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

import path from 'path';
import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const zippedFile = path.join(__dirname, 'files', 'archive.gz');

const readStream = createReadStream(fileToCompress);
const zipStream = createGzip(readStream);
const writeStream = createWriteStream(zippedFile)

const compress = async () => {
    pipeline(
      readStream,
      zipStream,
      writeStream,
      (error)=> console.log(error)
    )
};

await compress();