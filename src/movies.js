// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return directors = moviesArray.map((movie) => {
        return movie["director"];
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length < 1) {
        return 0;
    }
    
    const retVal = moviesArray.filter((movie) =>
        movie["director"] === "Steven Spielberg" && movie["genre"].includes("Drama")
    ).length

    return retVal;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length < 1) {
        return 0;
    }
    let retVal = moviesArray.reduce((accumulator, currentValue) => {
        if(currentValue.hasOwnProperty("score")) {
            return accumulator + currentValue["score"]
        } else {
            return accumulator;
        }
    }, 0 )
    return Math.round(retVal / moviesArray.length * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length < 1 ) {
        return 0;
    }

    let dramaMovieCount = 0;
    let retVal = moviesArray.filter((movie) =>
        movie["genre"].includes("Drama")).reduce((accumulator, currentValue) => {
            if(currentValue.hasOwnProperty("score") ) {
                dramaMovieCount +=1;
                return accumulator + currentValue["score"]
            } else {
                return accumulator;
            }
        }, 0)
    if(retVal == 0){
        return 0;
    }

    return Math.round(retVal / dramaMovieCount * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let retval = moviesArray.toSorted((a, b) => {
        if (a["year"] > b["year"]) return 1;
        if (a["year"] < b["year"]) return -1;

        if (a["title"] > b["title"]) return 1;
        if (a["title"] < b["title"]) return -1;
    })
    return retval;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    if( moviesArray.length < 20) {
        moviesArray.map((movie) => {
            return movie["title"]
        });
    }

    return moviesArray.sort( (a , b) => {
        console.log(a["title"] , b["title"])
        if (a["title"] > b["title"]) return 1;
        if (a["title"] < b["title"]) return -1;
    }
    ).filter((movie, index) => {
        return index < 20
    }).map((movie) => {
        return movie["title"]
    });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let copyArray = JSON.parse(JSON.stringify(moviesArray))
    return copyArray.map( movie => {
        let hourToMin = movie["duration"].split(" ")[0]?.replace("h", "") * 60;
        let minutes = movie["duration"].split(" ")[1]?.replace("min", "");
        console.log(minutes)
        movie["duration"] = Number(hourToMin) + ((minutes === undefined) ? 0 : Number(minutes));
        return movie;
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let bestScoreOverAll = 0;
    let bestYearOverAll= 0;
    if (moviesArray < 1 ){
        return null;
    }

    let splitArray = moviesArray.reduce((movie, currentIndex) => {
        if(movie[currentIndex["year"]])
            movie[currentIndex["year"]].push(currentIndex);
        else 
            Object.assign(movie, { [currentIndex["year"]]: [currentIndex]})

        return movie;
    }, {})


    for(const [key, value] of Object.entries(splitArray)) {
        let sumScore = value.reduce((accumulator, currentValue) => accumulator + currentValue["score"], 0)
        let bestScoreInYear = sumScore / value.length;
        let currentYear = value[0]["year"];

        if (bestScoreInYear > bestScoreOverAll){
            bestScoreOverAll = bestScoreInYear
            bestYearOverAll = currentYear
        }
    };
    
    return `The best year was ${bestYearOverAll} with an average score of ${bestScoreOverAll}`
}


// const movies = [
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Frank Darabont',
//       duration: '2h',
//       genre: ['Crime', 'Drama'],
//       score: 9.3
//     },
//     {
//       title: 'The Aodfather',
//       year: 1994,
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       score: 9.3
//     },
//     {
//       title: 'The Godfather: Part II',
//       year: 2008,
//       director: 'Francis Ford Coppola',
//       duration: '3h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9.4
//     },
//     {
//       title: 'The Dark Knight',
//       year: 2008,
//       director: 'Christopher Nolan',
//       duration: '2h 32min',
//       genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//       score: 9.5
//     },
//     {
//       title: '12 Angry Men',
//       year: 1957,
//       director: 'Sidney Lumet',
//       duration: '1h 36min',
//       genre: ['Crime'],
//       score: 8.9
//     },
//     {
//       title: 'Schindler"s List',
//       year: 1993,
//       director: 'Steven Spielberg',
//       duration: '3h 15min',
//       genre: ['Biography', 'History'],
//       score: 8.9
//     }
// ]

// console.log(bestYearAvg(movies));