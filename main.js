// // var my_array = [1, 2, 3, 4, 5, 6];
// // delete my_array[0];
// // console.log(my_array.filter(function(a) { return typeof a !== 'undefined'; }));
// var removeNthFromEnd = function(head, n) {
//     let arr = head;
//     delete arr[(arr.length - n)];
//     console.log(arr.filter(function(a) { return typeof a !== 'undefined'; }));
// };
// console.log(removeNthFromEnd([1, 2, 3, 4, 5, 6], 3))
//     //console.log(remove([1, 2, 1, 0, 3, 1, 4], 1));
// let test = 7;
// let test1 = test;
// console.log(test1);
// console.log(test);
// console.log(typeof test1)

// var x = 15 * (4 + 25 - 55);
// document.write(x);


// var x = '5';
// x = +x;
// var result = x--;
// document.write(result);
// let z = 0.2555;
// let y;
// y >>= z;
// console.log('y =' + ' ' + y)
// var a = 2,
//     b = 3,
//     c;

// var d = a *= c += b;
// console.log(d);
// var date = new Date();
// var time = date.getHours();

// if (time < 10) {
//     alert("Доброе утро!");
// } else {
//     alert("Добрый день!");
// }
// let x = 10,
//     y = 7;
// if (xnum > y) {
//     console.log('x больше, чем y')
// } else {
//     console.log('x не больше, чем y')
// }
// let mess = (x > y) ? 'x больше, чем y' : 'x yt больше, чем y';
// console.log(mess)
// let num1 = +prompt('Введите целое число: ', '');
// console.log(num1)
// var num2 = 0,
//     digit;

// while (num1 > 0) {
//     digit = num1 % 10; // находим остаток - последнюю цифру числа
//     console.log('this is digit' + ' ' + digit)
//     num1 = num1 / 10 ^ 0; // делим нацело - убираем из числа последнюю цифру
//     console.log('this is num1 ' + ' ' + num1)
//     num2 = num2 * 10; // увеличиваем разрядность второго числа
//     console.log('this is num2 ' + ' ' + num2)
//     num2 = num2 + digit; // добавляем очередную цифру
//     console.log('this is num2 sum ' + ' ' + num2)
// }
// console.log('"Обратное" ему число:' + num2);

// let users = {
//     "John": 28,
//     "Mark": 30,
//     "David": 25,
//     "Richard": 42
// };
// let sumAge = 0
// for (let age in users) {
//     sumAge += users[age];
// }
// console.log(sumAge)
// let num = +prompt('enter num');
// let sum = 0;
// while (num > 0) {
//     if (num % 10 % 2 == 0) {
//         sum += num % 10;
//         console.log('this is sum' + ' ' + sum)
//         num = num / 10 ^ 0;
//         console.log('this is' + ' ' + num)
//     }
// }
// console.log(sum);
// let x = 3,
//     y = 6;
// z = (x == 3 || y > 6);
// console.log(z)
// 1. String constant
// testCase = a => {
//     const words = 'Ноль Один Два Три Четыре Пять Шесть Семь Восемь Девять';
//     return words.split(' ')[a];
// };

// // 2. Array constant
// testCase = a => {
//     const words = ["Ноль", "Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять"];
//     return words[a];
// };

// // 3. Object constant
// testCase = a => {
//     const words = {0: "Ноль", 1: "Один", 2: "Два", 3: "Три", 4: "Четыре", 
//                    5: "Пять", 6: "Шесть", 7: "Семь", 8: "Восемь", 9: "Девять"};
//     return words[a];
// };

// // 4. Switch block
// testCase = a => {
//     switch (a) {     
//         case 0: return "Ноль"; 
//         case 1: return "Один";  
//         case 2: return "Два";  
//         case 3: return "Три";  
//         case 4: return "Четыре";  
//         case 5: return "Пять";  
//         case 6: return "Шесть"; 
//         case 7: return "Семь"; 
//         case 8: return "Восемь";
//         case 9: return "Девять";
//     }
// };

// // 5. If statements
// testCase = a => {
//       if (a == 0) return "Ноль"; 
//       if (a == 1) return "Один";
//       if (a == 2) return "Два";  
//       if (a == 3) return "Три";  
//       if (a == 4) return "Четыре";  
//       if (a == 5) return "Пять";  
//       if (a == 6) return "Шесть"; 
//       if (a == 7) return "Семь"; 
//       if (a == 8) return "Восемь"; 
//       if (a == 9) return "Девять";
// };

// // 6. Ternary operators
// testCase = a => 
//       a == 0 ? "Ноль"  : 
//       a == 1 ? "Один"  :  
//       a == 2 ? "Два"   :  
//       a == 3 ? "Три"   :  
//       a == 4 ? "Четыре":  
//       a == 5 ? "Пять"  :  
//       a == 6 ? "Шесть" : 
//       a == 7 ? "Семь"  : 
//       a == 8 ? "Восемь": 
//                "Девять";

// // 7. Logical operators
// testCase = a => 
//       a == 0 && "Ноль"   || 
//       a == 1 && "Один"   || 
//       a == 2 && "Два"    || 
//       a == 3 && "Три"    || 
//       a == 4 && "Четыре" || 
//       a == 5 && "Пять"   || 
//       a == 6 && "Шесть"  || 
//       a == 7 && "Семь"   || 
//       a == 8 && "Восемь" || 
//       a == 9 && "Девять";