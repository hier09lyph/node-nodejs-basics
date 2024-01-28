import {fileURLToPath} from 'url';
import { dirname } from 'path';

export const getFileNameFromUrl = fileURLToPath;

export const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));