import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

import data from "./photos.legacy.json";


function capitalizeFirstLetter(str: string) {
  return str[0]?.toUpperCase() + str.substring(1);
}

export function deSlugifyStr(str: string) {
  // if string doesn't contain a '-' or '_' just return back the capitalized word
  if (!str.includes('-') && !str.includes('_'))
    return capitalizeFirstLetter(str);

  // replaces '-' or '_ with ' '
  const StrWithDashesAndHypensReplacedWithSpaces = str
    .replace(/-/g, '  ')
    .replace(/_/g, '  ');

  let deSlugifiedStr = '';
  StrWithDashesAndHypensReplacedWithSpaces.split(' ').forEach((char) => {
    deSlugifiedStr += !!char ? capitalizeFirstLetter(char) : ' ';
  });
  return deSlugifiedStr;
}
// Directory where JSON files will be saved
const dataDir = path.join(__dirname, "content/film");

// Ensure the directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Write each object to a separate JSON file
data.forEach((item) => {
  const filePath = path.join(dataDir, `${item.id}.json`);
  const formattedItem = {
    id: item.id,
    title: deSlugifyStr(item.id),
    src: item.src.replace("../assets/images", "/img"),
    date: item.date,
    location: item.location,
    description: item.description,
    tags: item.tags,
    filmType: item.filmType,
    isPotraitOrientation: item.isPotraitOrientation,
  };
  fs.writeFileSync(filePath, JSON.stringify(formattedItem, null, 2), "utf8");
  console.log(`Saved: ${filePath}`);
});

console.log(`All ${data.length} files have been saved.`);
