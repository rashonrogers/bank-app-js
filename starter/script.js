'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = ' ';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposot' : 'withdarwal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
console.log(containerMovements.innerHTML);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
};

calcDisplaySummary(accounts);

const createUsername = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
    return username;
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

const user = 'Steven Thomas Williams';

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//accumulator is the sum
const balance = movements.reduce(function (accu, cur) {
  return accu + cur;
}, 0);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//   const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// //slice
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// //splice - changes original array
// console.log(arr.splice(2));

// //reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(...arr, ...arr2);

// //join
// console.log(letters.join(' - '));

// //att
// const arrAgain = [23, 11, 64];
// console.log(arrAgain[0]);
// console.log(arrAgain.at(0));
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// //loping for each

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else console.log(`you withdrew ${Math.abs(movement)}`);
// }
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else console.log(`you withdrew ${Math.abs(movement)}`);
// });

// //maps
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //set
// currenciesUnique = new Set(['USD', 'EURO', 'GBP']);

//coding challenge 2

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (arr1, arr2) {
//   arr1.splice(0, 1);
//   arr1.splice(-2);
//   console.log(arr1);
//   const dogs = arr1.concat(arr2);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`"Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const calcAvHumanAge = function (ages) {
//   const humanAges = ages.map(function (age) {
//     if (age > 18 && age > 2) {
//       return 16 + age * 4;
//     } else return age * 2;
//   });
//   console.log(humanAges);
//   const adults = humanAges.filter(age => age >= 18);
// };

// calcAvHumanAge([3, 5, 2, 12, 7]);

//map
// const eurToUsd = 1.1;
// account1.movements.map((mov) => mov * eurToUsd);

// console.log(account1.movements);

// const movementsDescriptions = account1.movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
// })

// console.log(movementsDescriptions);

// const euroToUsd = 1.1;
// const totalDepositUsd = movements
//   .filter(mov => move > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
