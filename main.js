// Task #0
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
task3('player2', player2);