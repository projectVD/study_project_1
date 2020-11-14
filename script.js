'use strict';

const numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMobieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
};

const a = prompt('Один из последних просмотреных фильмов', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотреных фильмов', ''),
      d = +prompt('На сколько оцените его?', '');

personalMobieDB.movies[a] = b;
personalMobieDB.movies[c] = d;

console.log(personalMobieDB);