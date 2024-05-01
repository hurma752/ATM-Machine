#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let pinCode = 6954;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your Pin number",
  },
]);

if (pinAnswer.pin === pinCode) {
  console.log("Correct pin code!!!");

  console.log(`Balance: ${myBalance}`);

  let actionAns = await inquirer.prompt([
    {
      name: "Action",
      type: "list",
      choices: ["withdraw", "checkBalance", "fastCash"],
      message: "Please select option.",
    },
  ]);

  if (actionAns.Action === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter the amount you want to withdraw.",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insufficient balance!!");
    } else {
      myBalance -= amountAns.amount;
      console.log(`Your remaining balance is ${myBalance}`);
    }
  } else if (actionAns.Action === "checkBalance") {
    console.log(`Your balance is ${myBalance}`);
  } else if (actionAns.Action === "fastCash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "fastCash",
        type: "list",
        message: "Choose the amount you want to fast cash.",
        choices: ["1000", "5000", "10000"],
      },
    ]);

    if (fastCashAns.fastCash === "1000") {
      myBalance -= fastCashAns.fastCash;
      console.log(`Your remaining balance is ${myBalance}`);
    } else if (fastCashAns.fastCash === "5000") {
      myBalance -= fastCashAns.fastCash;
      console.log(`Your remaining balance is ${myBalance}`);
    } else if (fastCashAns.fastCash === "10000") {
      myBalance -= fastCashAns.fastCash;
      console.log(`Your remaining balance is ${myBalance}`);
    }
  }
} else {
  console.log("Incorrect pin number!!!");
}
