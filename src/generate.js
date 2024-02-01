import { writeFile } from 'fs/promises';
import { join } from 'node:path';
import { createDirIfNotExists, readFile, readFilesFromDir } from './lib/file.js';
import { indexTemplate, leikirTemplate, stadaTemplate } from './lib/html.js';
import { parseGameday } from './lib/parse.js';
import { calculateStandings } from './lib/score.js';

const INPUT_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  await createDirIfNotExists(OUTPUT_DIR);

  const files = await readFilesFromDir(INPUT_DIR);

  const data = [];

  for await (const file of files) {
    if (file.indexOf('gameday') < 0){
      continue;
    } 
    const fileContent = await readFile(file);

    const parsed = parseGameday(fileContent);

    data.push(parsed);
  }

  const calculatedStandings = calculateStandings(data);
  const calculatedScore = 10;

  const indexHtml = indexTemplate();
  const indexFilename = join(OUTPUT_DIR, 'index.html');
  console.log(indexFilename);
  await writeFile(indexFilename, indexHtml);

  const stadaHtml = stadaTemplate(calculatedStandings);
  const stadaFilename = join(OUTPUT_DIR, 'stada.html');
  await writeFile(stadaFilename, stadaHtml);

  const leikirHtml = leikirTemplate(calculatedScore);
  const leikirFilename = join(OUTPUT_DIR, 'leikir.html');
  await writeFile(leikirFilename, leikirHtml);
}

main().catch((error) => {
  console.error('error generating', error);
});