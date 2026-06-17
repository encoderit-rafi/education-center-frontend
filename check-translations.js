const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8')).AboutUsPage;
const ar = JSON.parse(fs.readFileSync('messages/ar.json', 'utf8')).AboutUsPage;

function findMissingKeys(obj1, obj2, path = '') {
  const missing = [];
  for (const key in obj1) {
    const currentPath = path ? `${path}.${key}` : key;
    if (obj2[key] === undefined) {
      missing.push(`Missing in target: ${currentPath}`);
    } else if (typeof obj1[key] === 'object' && !Array.isArray(obj1[key])) {
      missing.push(...findMissingKeys(obj1[key], obj2[key], currentPath));
    } else if (Array.isArray(obj1[key])) {
      if (!Array.isArray(obj2[key])) {
        missing.push(`Type mismatch in target (expected array): ${currentPath}`);
      } else {
        if (obj1[key].length !== obj2[key].length) {
          missing.push(`Array length mismatch at ${currentPath}: source ${obj1[key].length}, target ${obj2[key].length}`);
        }
        for (let i = 0; i < obj1[key].length; i++) {
          missing.push(...findMissingKeys(obj1[key][i], obj2[key][i] || {}, `${currentPath}[${i}]`));
        }
      }
    }
  }
  return missing;
}

console.log("Missing in AR:");
console.log(findMissingKeys(en, ar).join('\n'));

console.log("\nMissing in EN:");
console.log(findMissingKeys(ar, en).join('\n'));
