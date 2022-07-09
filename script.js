'use strict';

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start: function () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (!numberOfFilms) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  detectPersonalLevel: function () {
    if (this.count < 10) {
      alert('Просмотренно довольно мало фильмов!');
    } else if (this.count < 30) {
      alert('Вы классический зритель!');
    } else {
      alert('Вы - киноман!');
    }
  },

  rememberMyFilms: function () {
    alert('Вспомните последние 2 просмотренных фильма');

    for (let i = 0; i < 2; i++) {
      let nameFilm = prompt(`Введите ${i + 1}-й просмотренный фильм: `).trim();
      console.log(nameFilm.length);
      while (!nameFilm || nameFilm.length > 50) {
        nameFilm = prompt(`Введите ${i + 1}-й просмотренный фильм: `).trim();
      }
      let rating = +prompt('На сколько оцените его?');
      while (!rating) {
        rating = +prompt('На сколько оцените его?');
      }
      this.movies[nameFilm] = rating;
    }
  },
  showMyDB: function () {
    if (!this.private) {
      console.log(this);
    }
  },
  writeYourGenres: function () {
    alert('Вспомните последние 3 просмотренных фильма');

    for (let i = 0; i < 3; i++) {
      let nameGenre = prompt(`Ваш любимый жанр под номером ${i + 1}:`);
      while (!nameGenre) {
        nameGenre = prompt(`Ваш любимый жанр под номером ${i + 1}:`);
      }
      this.genres.push(nameGenre);
    }

    let result = '';
    this.genres.forEach((genre, i) => {
      result += `Любимый жанр №${i + 1} - это ${genre}\n`;
    });
    alert(result);
  },
  run: function () {
    this.start();
    this.detectPersonalLevel();
    this.rememberMyFilms();
    this.writeYourGenres();
  },
  toggleVisibleMyDB: function () {
    this.private = !this.private;
  },
};

personalMovieDB.run();
