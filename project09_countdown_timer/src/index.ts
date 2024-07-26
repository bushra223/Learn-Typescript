import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    type: "input",
    name: "hours",
    message:
      "Please enter the interval for which you want to set coundown timer(hour:min:sec):\nHours:",
  },
  {
    type: "input",
    name: "min",
    message: "\nMinutes:",
    //validate for it should not be more than 59
    validate: (value) => {
      const parsed = parseInt(value, 10);
      if (isNaN(parsed) || parsed < 0 || parsed > 59) {
        return "Please enter a valid number between 0 and 59";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "sec",
    message: "\nSeconds:",
    //validate for it should not be more than 59
    validate: (value) => {
      const parsed = parseInt(value, 10);
      if (isNaN(parsed) || parsed < 0 || parsed > 59) {
        return "Please enter a valid number between 0 and 59";
      }
      return true;
    },
  },
]);

console.log(
  `Your countdown timer has set to ${answer.hours} hours:${answer.min} minutes:${answer.sec} seconds`
);

let currentTime = new Date();
let stoppingTime = new Date(
  2024,
  7,
  2,
  currentTime.getHours() + Number(answer.hours),
  currentTime.getMinutes() + Number(answer.min),
  currentTime.getSeconds() + Number(answer.sec)
);

console.log("current milliseconds: " + currentTime);
console.log("stopping milliseconds:" + stoppingTime);

let calculateCountdown = () => {
  let current = new Date();
  let remainingTime = stoppingTime.getTime() - current.getTime();
  const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
  const remainingMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const remainingHours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

  if (remainingSeconds <= 0 && remainingHours <= 0 && remainingMinutes <= 0) {
    clearInterval(timer);
    console.log("Countdown timer has ended!");
    return;
  } else
    console.log(
      `${remainingHours} Hour: ${remainingMinutes} Min: ${remainingSeconds} Sec`
    );
};

let timer = setInterval(calculateCountdown, 1000);
