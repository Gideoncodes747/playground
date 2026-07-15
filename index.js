// const names = ['shaun', 'mario', 'luigi'];

// let i = 0;
// while (i < names.length[i]) {
//   console.log(names[i]);
//   i++;
// }

// let i = 0;

// while (i < 5) {
//   console.log('in loop', i);
//   i++;
// }

// do while loops

// let i = 5;
// do {
//   console.log('val of i is:', i);
//   i++;
// } while (i < 5);

// if statements
// const age = 25;
// if (age > 20) {
//   console.log('You are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
// if (ninjas.length > 3) {
//   console.log("That's a lot of ninjas");
// }

// const password = 'p@ssword1234';

// if (password.length >= 8) {
//   console.log('that password is long enough!');
// }

// else if statements

// const password = 'p@ssword1234';

// if (password.length >= 12) {
//   console.log('that password is mighty strong!');
// } else if (password.length >= 8) {
//   console.log('that password is long enough!');
// } else {
//   console.log('that password is not long enough!');
// }

// logical operators - OR || and AND &&

// const password = 'p@ssword1234';
// if (password.length >= 12 || password.includes('!')) {
//   console.log('that password is mighty strong!');
// }

// LOGICAL NOT (!)

// let user = false; //user not logged in. // false/True
// if (!user) {
//   console.log('You must be logged in to continue');
// } else {
//   console.log('You are logged in');
// }

// break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
//   console.log('your score:', scores[i]);

//   if (scores[i] === 0) {
//     console.log('You failed!');
//     continue;
//   }

//   if (scores[i] === 100) {
//     console.log('You got a perfect score!');
//   }
// }

//switch statements

const grade = 'D';

switch (grade) {
  case 'A':
    console.log('You got an A!');
    break;
  case 'B':
    console.log('You got a A!');
    break;
  case 'C':
    console.log('You got an A!');
    break;
  case 'D':
    console.log('You got a A!');
    break;
  default:
    console.log('not a valid grade');
}
