const fs = require('fs');
const path = require('path');

function countFiles(dir, filter) {
  let count = 0;
  if (!fs.existsSync(dir)) return count;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      count += countFiles(fullPath, filter);
    } else if (filter(file)) {
      count++;
    }
  }
  return count;
}

const appDir = path.join(__dirname, '../app');
const componentsDir = path.join(__dirname, '../components');

const totalPages = countFiles(appDir, f => f === 'page.tsx');
const totalApiRoutes = countFiles(appDir, f => f === 'route.ts');
const totalComponents = countFiles(componentsDir, f => f.endsWith('.tsx'));
const dbTables = 12; // Hardcoded based on schema.ts (users, categories, brands, products, productVariants, productImages, productFaqs, productSpecifications, orders, orderItems, payments, shippingDetails)

console.log('--- Project Statistics ---');
console.log(`Total Pages: ${totalPages}`);
console.log(`Total Components: ${totalComponents}`);
console.log(`Total API Routes: ${totalApiRoutes}`);
console.log(`Total Database Tables: ${dbTables}`);
console.log('--------------------------');
