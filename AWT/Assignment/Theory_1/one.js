const calculator = require('./calculator');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log("Assignment by - Abhisht Chouhan [21BCP450D]\n")
  console.log('\n=== Calculator Menu ===');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Exit');
}

function performOperation(choice) {
  switch (choice) {
    case '1':
      return calculator.add;
    case '2':
      return calculator.subtract;
    case '3':
      return calculator.multiply;
    case '4':
      return calculator.divide;
    case '5':
      process.exit();
    default:
      console.log('Invalid choice. Please enter a number between 1 and 5.');
      return null;
  }
}

function startCalculator() {
  displayMenu();

  rl.question('Enter your choice (1-5): ', (choice) => {
    const operation = performOperation(choice);
    if (operation) {
      if (choice !== '5') {
        rl.question('Enter the 1st Number: ', (num1) => {
          rl.question('Enter the 2nd number: ', (num2) => {
            const result = operation(parseFloat(num1), parseFloat(num2));
            console.log(`Result: ${result}`);
            rl.question('Press any key to continue...', () => {
                console.clear();
                startCalculator();
            });
          });
        });
      } else {
        startCalculator();
      }
    } else {
    rl.question('Press any key to continue...', () => {
        console.clear();
        startCalculator();
    });
    }
  });
}

startCalculator();
