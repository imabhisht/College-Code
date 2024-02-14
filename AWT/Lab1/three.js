
const fs = require('fs');

fs.rename('Test.txt', 'renamed_test.txt', (err) => {
   if (err) throw err;
   console.log('File Renamed');
});
