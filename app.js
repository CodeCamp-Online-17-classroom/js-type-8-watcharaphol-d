// write code here
let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined); // The result of 'a' is: 84

// ========= Solution: =========
// a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);
// a = 1 * '4' + +null + +' ' - '5' * 2 + +(9 + '' + +!!undefined);
// a = 1 * '4' + +null + +' ' - '5' * 2 + +('9' +!!undefined);
// a = 1 * '4' + +null + +' ' - '5' * 2 + +('9' +!true);
// a = 1 * '4' + +null + +' ' - '5' * 2 + +('9' +false);
// a = 1 * '4' + +null + +' ' - '5' * 2 + +('9' + 0);
// a = 1 * '4' + +null + +' ' - '5' * 2 + +('9' + 0);
// a = 1 * '4' + +null + +' ' - '5' * 2 + +('90');
// a = 1 * '4' + +null + +' ' - '5' * 2 + 90;
// a = 4 + +null + +' ' - '5' * 2 + 90;
// a = 4 + 0 + +' ' - '5' * 2 + 90;
// a = 4 + +' ' - '5' * 2 + 90;
// a = 4 + 0 - '5' * 2 + 90;
// a = 4 - '5' * 2 + 90;
// a = 4 - 10 + 90;
// a = -6 + 90;
// a = 84;