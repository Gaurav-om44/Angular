const fs = require('fs-extra');
const concat = require('concat');
const path = require('path');

(async function build() {
  // List all files in the browser directory to find the correct file names
  const dir = './dist/reusable-web-components/browser';
  const files = await fs.readdir(dir);

  // Find the exact file names for the required files
  const polyfills = files.find(f => f.startsWith('polyfills'));
  const main = files.find(f => f.startsWith('main'));

  const filesToConcat = [
    path.join(dir, polyfills),
    path.join(dir, main)
  ];

  await fs.ensureDir('elements');
  await concat(filesToConcat, 'elements/weather-widget.js');
  await fs.copyFile(path.join(dir, 'styles.css'), 'elements/styles.css');
})();
