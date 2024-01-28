import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import { getDirnameFromUrl } from '../utils/utils.js';

const __dirname = getDirnameFromUrl(import.meta.url)
const fileToCalculateHashFor = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateSHA256Hash = (filePath) => {
    const hash = createHash('sha256');
    const readStream = createReadStream(filePath);

    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        const hashResult = hash.digest('hex');
        console.log(`SHA256 hash for ${filePath}: ${hashResult}`);
    });

    readStream.on('error', (error) => {
        console.error(`Error reading file: ${error.message}`);
    });
};

// Usage example:
calculateSHA256Hash(fileToCalculateHashFor);
