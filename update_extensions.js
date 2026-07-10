const fs = require('fs');
const glob = require('glob');

const files = glob.sync('**/*.{tsx,ts,js}', { ignore: ['node_modules/**', '.next/**', 'out/**'] });

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('.webp')) {
    const original = content;
    content = content.replace(/\.webp/g, '.webp');
    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Updated ' + file);
    }
  }
});
