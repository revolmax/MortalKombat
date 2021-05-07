/* // Task #0
const player1 = {
    name: 'SONYA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Лук', 'Меч', 'Молот', 'Ядро', 'Пистолет', 'Дубина', 'Нож'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

const player2 = {
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Вилы', 'Меч', 'Молот', 'Дубина', 'Пистолет', 'Рогатка', 'Лассо'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

player1.attack();
player2.attack();


// Task #1
const task1 = function createPlayer() {
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = 'Scorpion';

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

    $character.appendChild($img);

    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    const $root = document.querySelector('.root');
    $root.appendChild($player1);
}

task1();


// Task #2
const task2 = function createPlayer(className, name, life, image) {
    const $player = document.createElement('div');
    $player.classList.add(className);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = life + '%';
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = image;

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

task2('player2', 'KITANA', 50, 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif');
task2('player3', 'LIUKANG', 80, 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif');


// Task #3
const task3 = function createPlayer(className, player) {
    const $player = document.createElement('div');
    $player.classList.add(className);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = player.hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = player.img;

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

task3('player1', player1);
task3('player2', player2);*/

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

// Task #0
const player1 = {
    player: 1,
    name: 'SONYA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Лук', 'Меч', 'Молот', 'Ядро', 'Пистолет', 'Дубина', 'Нож'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Вилы', 'Меч', 'Молот', 'Дубина', 'Пистолет', 'Рогатка', 'Лассо'],
    attack: function() {
        console.log(this.name + ' ' + 'Fight...');
    }
};

player1.attack();
player2.attack();


// Task #1
const task1 = function createPlayer() {
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = 'Scorpion';

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

    $character.appendChild($img);

    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    const $root = document.querySelector('.root');
    $root.appendChild($player1);
}

//task1();


// Task #2
const task2 = function createPlayer(className, name, life, image) {
    const $player = document.createElement('div');
    $player.classList.add(className);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = life + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = image;

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

//task2('player2', 'KITANA', 50, 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif');
//task2('player3', 'LIUKANG', 80, 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif');

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}


// Task #3
function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);

    if (player.hp < 0) {
        $randomButton.disabled = true;
        $playerLife.style.width = '0%';
        //$arenas.appendChild(playerLose(player.name));
        let wins;
        if (player.player == 1) {
            wins = player2.name;
        } else {
            wins = player1.name;
        }
        $arenas.appendChild(playerWins(wins));
    } else {
        $playerLife.style.width = player.hp + '%';
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}

function playerWins(name) {
    const $winsTitle = createElement('div', 'winsTitle');
    $winsTitle.innerText = name + ' wins !!!';

    return $winsTitle;
}

$randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');
    changeHP(player1);
    changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

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
let num = +prompt('enter num');
let sum = 0;
while (num > 0) {
    if (num % 10 % 2 == 0) {
        sum += num % 10;
        console.log('this is sum' + ' ' + sum)
        num = num / 10 ^ 0;
        console.log('this is' + ' ' + num)
    }
}
console.log(sum);