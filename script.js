'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  private: false,
};

if (personalMovieDB.count < 10) alert('Просмотренно довольно мало фильмов!');
  else if (personalMovieDB.count < 30) alert('Вы классический зритель!');
    else alert('Вы - киноман!');
alert('Вспомните последние 3 просмотренных фильма');
for (let i = 0; i < 3; i++) {
  let nameFilm = prompt(`Введите ${i + 1}-й просмотренный фильм: `);

  while (!nameFilm && nameFilm.length > 50) {
    nameFilm = prompt(`Введите ${i + 1}-й просмотренный фильм: `);
  }

  let rating = prompt('На сколько оцените его?');

  while (!rating) {
    rating = prompt('На сколько оцените его?');
  }
  personalMovieDB.movies[nameFilm] = rating;
}

console.log(personalMovieDB);
