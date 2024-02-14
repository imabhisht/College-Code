const fs = require('fs');
const readline = require('readline');

function copyFileContent(sourceFilePath, destinationFilePath) {
  const readStream = fs.createReadStream(sourceFilePath);
  const writeStream = fs.createWriteStream(destinationFilePath);

  const rl = readline.createInterface({
    input: readStream,
    output: writeStream,
  });

  rl.on('line', (line) => {
    writeStream.write(`${line}\n`);
  });

  rl.on('close', () => {
    console.log(`Content copied from ${sourceFilePath} to ${destinationFilePath}`);
    writeStream.end();
    process.exit();
  });
}

function displayMenu() {
  console.log("Assignment by - Abhisht Chouhan [21BCP450D]\n")
  console.log('\n=== File Menu ===');
  console.log('1. Copy file content');
  console.log('2. Exit');
}

function startFileCopy() {
  displayMenu();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter your choice (1-2): ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter the path of the source file: ', async(sourceFile) => {
          await rl.question('Enter the path of the destination file: ', async(destinationFile) => {
            copyFileContent(sourceFile, destinationFile);
          });
        });
        break;
      case '2':
        process.exit();
        break;
      default:
        console.log('Invalid choice. Please enter a number between 1 and 2.');
        startFileCopy();
    }
  });
}
startFileCopy();
