/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const body = document.querySelector('.body');

function showMyDb(h) {
    if (!h) {
        console.log(personalMovieDB);
    }
}
showMyDb(personalMovieDB.privat);


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        const howFilm = prompt('На сколько оцените его?', '');

        if (lastFilm != '' && howFilm != '' && lastFilm != null && howFilm != null && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = howFilm;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert(`Вы киноман просмотрели ${personalMovieDB.count} фильмов`);
        const block = document.createElement('div');
        block.classList.add('block');
        body.append(block);
    } else {
        alert('ERROR!!!');
    }
}
detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const questionGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = questionGenres;
    }
}
writeYourGenres();









// let i;
// for (i = 5; i <= 10; i++) {
//     console.log(i);
// }

// let j;
// a: for (j = 20; j >= 10; j--) {
//     if (j === 13) {
//         break a;
//     }
//     console.log(j);
// }

// let k;
// for (k = 2; k <= 10; k = k + 2) {
//     console.log(k);
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let d = 2;
// while (d <= 16) {
//     if (d % 2 === 0) {
//         d++;
//         continue;
//     } else {
//         console.log(d);
//     }
//     d++;
// }


// let arr = [];
// for (let s = 5; s <= 10; s++) {
//     arr[s - 5] = s;
// }
// console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// let lenght = 7;
// let result = '';


// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result = result + " " + '*';
//     }
//     result = result + '\n';
// }
// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// // Место для первой задачи
// function sayHello(i) {
//     return `Привет, ${i}`;
// }
// console.log(sayHello('Антон'));


// // Место для второй задачи
// function returnNeighboringNumbers(a) {
//     return [a - 1, a, a + 1];
// }
// console.log(returnNeighboringNumbers(5));

// // Место для третьей задачи
// function getMathResult(a, b) {

//     if (typeof (b) !== 'number' || b <= 0) {
//         return a;
//     }

//     let str = '';

//     for (let i = 1; i <= b; i++) {
//         if (b === i) {
//             str += `${a * i}`;
//         } else {
//             str += `${a * i}---`;
//         }

//     }
//     return str;
// }

// console.log(getMathResult(5, 5));

// Практика 29 ч.3
function calculateVolumeAndArea(s) {
    let V = s * s * s;
    let S = 6 * (s * s);
    if (typeof (s) !== 'number' || s < 0 || !Number.isInteger(s)) {
        return 'При вычислении произошла ошибка';
    } else {
        return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
    }
}
console.log(calculateVolumeAndArea(12));