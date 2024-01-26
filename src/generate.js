import { createDirIfNotExists, readFilesFromDir } from './lib/file.js';

const INPUT_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  await createDirIfNotExists(OUTPUT_DIR);

  const files = readFilesFromDir(INPUT_DIR);

  console.lof(files);

}

main().catch((error) => {
  console.error('error generating', error);
});