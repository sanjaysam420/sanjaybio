const fs = require('fs');
const path = require('path');

// Simple 1x1 transparent PNG for placeholders
const pngBuffer = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');

const publicDir = path.join(__dirname, 'public');

// Create icon files
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), pngBuffer);
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), pngBuffer);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngBuffer);

console.log('✓ PWA icons created');
