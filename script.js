'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
console.log(typeof numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  private: false,
};

for (let i = 0; i < numberOfFilms; i++) {
  const nameFilm = prompt(`Введите ${i + 1}-й просмотренный фильм: `);
  const rating = prompt("На сколько оцените его?");
  personalMovieDB.movies[nameFilm] = rating;
}

console.log(personalMovieDB);
