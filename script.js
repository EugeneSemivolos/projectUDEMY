'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (!numberOfFilms) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов!');
  } else if (personalMovieDB.count < 30) {
    alert('Вы классический зритель!');
  } else {
    alert('Вы - киноман!');
  }

}
detectPersonalLevel();

function rememberMyFilms() {
  alert('Вспомните последние 2 просмотренных фильма');

  for (let i = 0; i < 2; i++) {
    let nameFilm = prompt(`Введите ${i + 1}-й просмотренный фильм: `);
    while (!nameFilm && nameFilm.length > 50) {
      nameFilm = prompt(`Введите ${i + 1}-й просмотренный фильм: `);
    }
    let rating = +prompt('На сколько оцените его?');
    while (!rating) {
      rating = +prompt('На сколько оцените его?');
    }
    personalMovieDB.movies[nameFilm] = rating;
  }
}

rememberMyFilms();

const showMyDB = (db) => {
  if (!db.private) {
    console.log(db);
  }
}

function writeYourGenres() {
  alert('Вспомните последние 3 просмотренных фильма');

  for (let i = 0; i < 3; i++) {
    let nameGenre = prompt(`Ваш любимый жанр под номером ${i + 1}:`);
    while (!nameGenre) {
      nameGenre = prompt(`Ваш любимый жанр под номером ${i + 1}:`);
    }
    personalMovieDB.genres.push(nameGenre);
  }
}
writeYourGenres();
