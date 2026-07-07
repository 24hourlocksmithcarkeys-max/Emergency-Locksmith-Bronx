const fs = require('fs');
const glob = require('glob');

function truncate(str, max) {
  if (str.length <= max) return str;
  // Truncate to max-3 and add '...' but avoid breaking words if possible
  const sub = str.substring(0, max - 3);
  return sub.substring(0, Math.min(sub.length, sub.lastIndexOf(' '))) + '...';
}

const files = glob.sync('app/**/*.tsx');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Process static metadata blocks
  const metaRegex = /export const metadata = \{\s*title:\s*["']([^"']+)["'],\s*description:\s*["']([^"']+)["']/g;
  content = content.replace(metaRegex, (match, title, desc) => {
    changed = true;
    const truncTitle = title.length > 32 ? truncate(title, 32) : title;
    const truncDesc = desc.length > 155 ? truncate(desc, 155) : desc;
    return \export const metadata = {\\n  title: "\",\\n  description: "\"\;
  });

  // Process generateMetadata in subservice and blog
  if (content.includes('export async function generateMetadata')) {
    if (content.includes('title: data.title,')) {
      content = content.replace(
        'title: data.title,',
        'title: data.title.length > 32 ? data.title.substring(0, 29) + "..." : data.title,'
      );
      changed = true;
    }
    if (content.includes('description: data.metaDesc,')) {
      content = content.replace(
        'description: data.metaDesc,',
        'description: data.metaDesc.length > 155 ? data.metaDesc.substring(0, 152) + "..." : data.metaDesc,'
      );
      changed = true;
    }
    if (content.includes('title: post.title,')) {
      content = content.replace(
        'title: post.title,',
        'title: post.title.length > 32 ? post.title.substring(0, 29) + "..." : post.title,'
      );
      changed = true;
    }
    if (content.includes('description: post.excerpt,')) {
      content = content.replace(
        'description: post.excerpt,',
        'description: post.excerpt.length > 155 ? post.excerpt.substring(0, 152) + "..." : post.excerpt,'
      );
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
