const symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']; //storing each character in an array

let time = 0;

for (let symbol of symbols) { // iterates through every element inside symbols array

  setTimeout(() => {
    process.stdout.write(`\r${symbol}`);
  }, time);
  time += 200;
};