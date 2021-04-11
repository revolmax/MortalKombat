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
  attack: function () {
    console.log(this.name + ' ' + 'Fight...');
  }
};

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Вилы', 'Меч', 'Молот', 'Дубина', 'Пистолет', 'Рогатка', 'Лассо'],
  attack: function () {
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

$randomButton.addEventListener('click', function () {
  console.log('####: Click Random Button');
  changeHP(player1);
  changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
