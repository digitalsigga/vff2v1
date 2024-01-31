import { createDirIfNotExists, readFile, readFilesFromDir } from './lib/file.js';

const INPUT_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  await createDirIfNotExists(OUTPUT_DIR);

  const files = await readFilesFromDir(INPUT_DIR);

  for (const file of files) {
    if (file.indexOf('gameday') < 0){
      continue;
    } 
    const fileContent = await readFile(file);
    console.log(file, fileContent?.length);
  }
}

main().catch((error) => {
  console.error('error generating', error);
});