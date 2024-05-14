console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "Hello.Java1";

const receivedPassword = "Hello.Java1";

if (receivedPassword !== SUPER_SECRET_PASSWORD) {
  console.log("Access denied!");
} else {
  console.log("Welcome! You are logged in as ndrbn0.");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
} // not sure I've understood

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let hotdogPrice = 2;

if (numberOfHotdogs < 5) {
  hotdogPrice = 2;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  hotdogPrice = 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  hotdogPrice = 1;
} else {
  hotdogPrice = 0.1;
}
const total = numberOfHotdogs * hotdogPrice;
const totalPrice = numberOfHotdogs * hotdogPrice;
console.log("Price for 42 Hotdogs:", total);

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const coachName = "Esraa";
const userName = "Andrea";

const greeting =
  userName === coachName ? "Hello Coach!" : "Hello " + userName + "!";

console.log(greeting);
