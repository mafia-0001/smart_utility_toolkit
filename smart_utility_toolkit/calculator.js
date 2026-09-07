const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide valid numbers.");
    process.exit(1);
}

let result;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;

    case "subtract":
        result = num1 - num2;
        break;

    case "multiply":
        result = num1 * num2;
        break;

    case "divide":
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
            process.exit(1);
        }
        result = num1 / num2;
        break;

    default:
        console.log("Invalid operation.");
        console.log("Use: add, subtract, multiply, divide");
        process.exit(1);
}

console.log(`Result: ${result}`);