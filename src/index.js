'use strict';

function calculateFatherTwofoldOlder(fathersAge, sonsAge) {
  let years = 0;

  if (fathersAge - sonsAge < 15 || sonsAge < 0) {
    return NaN;
  }
  if (fathersAge / 2 === sonsAge) {
    return years;
  }
  if (fathersAge < sonsAge * 2) {
    years = fathersAge - sonsAge * 2;
    return years;
  }
  if (fathersAge > sonsAge * 2) {
    years = fathersAge - sonsAge * 2;
    return years;
  }
}

// Verify function
const fathersAge = 40;
const sonsAge = 21;

const result = calculateFatherTwofoldOlder(fathersAge, sonsAge);

// Outputting the result to the console
if (result < 0) {
  console.log(
    `Father was twice as old as his son ${Math.abs(result)} years ago.`
  );
} else if (result > 0) {
  console.log(
    `The father will be twice the age of his son in ${result} years.`
  );
} else {
  console.log(`Now the father is twice as old as his son.`);
}
