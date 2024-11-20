const trueToday = "11/20/2024";

const today = new Date();

console.log("Hello World!")
console.log(today.toLocaleDateString());

console.log(today)

if (today.toLocaleDateString() === trueToday) {
    console.log('Test passed: today matches trueToday');
  } else {
    console.error('Test failed: today does not match trueToday');
  }


// verified test 2