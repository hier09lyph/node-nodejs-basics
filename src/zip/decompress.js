import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

import path from 'path';
import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const fileToDecompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const zippedFile = path.join(__dirname, 'files', 'archive.gz');

const readStream = createReadStream(zippedFile);
const zipStream = createUnzip(readStream);
const writeStream = createWriteStream(fileToDecompress)

const decompress = async () => {
    pipeline(
      readStream,
      zipStream,
      writeStream,
      (error)=> console.log(error)
    )
};

await decompress();