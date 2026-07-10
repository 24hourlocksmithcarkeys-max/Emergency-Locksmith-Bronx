const sharp = require('sharp');
const fs = require('fs');
const glob = require('glob');

const files = glob.sync('public/images/**/*.webp');
(async () => {
  for (const file of files) {
    const out = file.replace(/\.webp$/, '.webp');
    await sharp(file).webp({ quality: 80 }).toFile(out);
    console.log('Converted', file, 'to', out);
    fs.unlinkSync(file);
  }
})();
