const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const [, , folderPath, artistName, albumName, ...args] = process.argv;

if (!folderPath || !artistName || !albumName) {
  console.error('See README.md! Usage: node script.js <folderPath> <artistName> <albumName> [-c]');
  process.exit(1);
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

function isAudioFile(filePath) {
  try {
    execSync(`ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filePath}"`);
    return true;
  } catch (error) {
    return false;
  }
}

function renameAudioFiles(folderPath, artistName, albumName, isUpperCase) {
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file);
    if (isAudioFile(filePath)) {
      const match = file.match(/^\d+/);
      
      if (match) {
        const trackNumber = match[0]; // Capture the track number only once
        const newFileName = `${artistName} - ${albumName} - ${padNumber(trackNumber)} ${file.slice(trackNumber.length).trim()}`;

          
        if (!isUpperCase) fs.renameSync(filePath, path.join(folderPath, newFileName));

        fs.renameSync(filePath, path.join(folderPath, newFileName.toUpperCase()));
      }
    }
  });
}

// Check if the "-c" flag is provided
const isUpperCase = args.includes('-c');

renameAudioFiles(folderPath, artistName, albumName, isUpperCase);
console.log('Audio files renamed successfully!');
