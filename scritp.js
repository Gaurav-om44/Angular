const fs = require('fs');
const path = require('path');

const deleteFolderRecursive = function (folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, index) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recurse
        deleteFolderRecursive(curPath);
      } else {
        // Delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
};

// Starting directory
const startPath = process.cwd();

// Find and delete all node_modules directories
const findAndDeleteNodeModules = function (dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      if (file === 'node_modules') {
        console.log(`Deleting: ${fullPath}`);
        deleteFolderRecursive(fullPath);
      } else {
        findAndDeleteNodeModules(fullPath);
      }
    }
  });
};

findAndDeleteNodeModules(startPath);
