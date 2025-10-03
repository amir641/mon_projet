const fs = require('fs'); const path = require('path');
fs.copyFileSync('index.js', path.join('dist', 'index.js'));
console.log('✅ Build terminé, fichier copié dans dist/');
