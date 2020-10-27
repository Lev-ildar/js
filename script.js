"use strict";

const numberOfFilms = +prompt("How many films do you see?", "1");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

const film = prompt("films do you see?", ""),
        num = prompt("Rating?", ""),
        film2 = prompt("films do you see?", ""),
        num2 = prompt("Rating?", "");

personalMovieDB.movies[film] = num;
personalMovieDB.movies[film2] = num2;

console.log(personalMovieDB);