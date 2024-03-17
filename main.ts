import inquirer from "inquirer";

do {
  console.log("\n");

  const answer = await inquirer.prompt([
    {
      name: "operator",
      type: "list",
      message: "select one of the operators to perform action:",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Modulus",
        "Exponential",
        "Exit",
      ],
      default: "Addition",
    },
  ]);

  if (answer.operator === "Addition") {
    const answer = await inquirer.prompt([
      {
        name: "num1",
        type: "number",
        message: "Enter first Number: ",
      },
      {
        name: "num2",
        type: "number",
        message: "Enter Second Number: ",
      },
    ]);
    console.log(`Addition: ${answer.num1 + answer.num2}`);
  } else if (answer.operator === "Subtraction") {
    const answer = await inquirer.prompt([
      {
        name: "num1",
        type: "number",
        message: "Enter first Number: ",
      },
      {
        name: "num2",
        type: "number",
        message: "Enter Second Number: ",
      },
    ]);
    console.log(`Subtraction: ${answer.num1 - answer.num2}`);
  } else if (answer.operator === "Multiplication") {
    const answer = await inquirer.prompt([
      {
        name: "num1",
        type: "number",
        message: "Enter first Number: ",
      },
      {
        name: "num2",
        type: "number",
        message: "Enter Second Number: ",
      },
    ]);
    console.log(`Multiplication: ${answer.num1 * answer.num2}`);
  } else if (answer.operator === "Division") {
    const answer = await inquirer.prompt([
      {
        name: "num1",
        type: "number",
        message: "Enter first Number: ",
      },
      {
        name: "num2",
        type: "number",
        message: "Enter Second Number: ",
      },
    ]);
    console.log(`Division: ${answer.num1 / answer.num2}`);
  } else if (answer.operator === "Modulus") {
    const answer = await inquirer.prompt([
      {
        name: "num1",
        type: "number",
        message: "Enter first Number: ",
      },
      {
        name: "num2",
        type: "number",
        message: "Enter Second Number: ",
      },
    ]);
    console.log(`Modulus: ${answer.num1 % answer.num2}`);
  } else if (answer.operator === "Exponential") {
    const answer = await inquirer.prompt([
      {
        name: "num1",
        type: "number",
        message: "Enter first Number: ",
      },
      {
        name: "num2",
        type: "number",
        message: "Enter Second Number: ",
      },
    ]);
    console.log(`Exponential: ${answer.num1 ** answer.num2}`);
  } else if (answer.operator === "Exit") {
    break;
  } else {
    console.log("Invalid input");
  }
  
} while (true);
