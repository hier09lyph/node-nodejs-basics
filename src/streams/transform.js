import {Transform} from 'node:stream'

const myTransform = new Transform({
  transform(chunk, encoding, callback) {
    const clInput = chunk.toString().trim();
    const clOutput = clInput.split('').reverse().join('');
    callback(null, clOutput + '\n')
  },
});

const transform = async () => {
    try{
      process.stdin.pipe(myTransform).pipe(process.stdout)
    } catch {
      console.log('Process error');
    }
};

await transform();