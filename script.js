"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt("How many films do you see?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("How many films do you see?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

function rememberMyFilms() {
for (let i = 0; i < 2; i++) {
    const film = prompt("films do you see?", ""),
        num = prompt("Rating?", "");

    if (film != null && num != null && film != '' && num != '' && film.length < 50) {
        personalMovieDB.movies[film] = num;  
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
      console.log('little');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('classic');
  } else if (personalMovieDB.count >= 30) {
    console.log('kinoman');
  } else {
      console.log('err');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your ganre # ${i}`);
    }
}

writeYourGenres();