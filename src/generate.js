import { createDirIfNotExists, readFilesFromDir } from './lib/file.js';

const INPUT_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  await createDirIfNotExists(OUTPUT_DIR);

  const files = readFilesFromDir(INPUT_DIR);

  for await (const file of files) {
    if (file.indexOf('gameday') < 0){
      continue;
    } 
    const fileContent = await readFile(file);
    console.log(file, fileContents?.length);
  }


}

main().catch((error) => {
  console.error('error generating', error);
});