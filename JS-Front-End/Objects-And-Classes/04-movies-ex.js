function solve(input) {
    const movies = [];
    const addMovie = 'addMovie';
    const directedBy = 'directedBy';
    const onDate = 'onDate';
    for (const row of input) {
        if (row.includes(addMovie)) {
            const movie = {
                name: row.substring(addMovie.length + 1),
            }
            movies.push(movie);
        } else if (row.includes(directedBy)) {
            const [movieName, director] = row.split(` ${directedBy} `);
            const movie = movies.find(({name}) => name === movieName);
            if (movie){
                movie.director = director;
            }
        } else if (row.includes(onDate)) {
            const [movieName, date] = row.split(` ${onDate} `);
            const movie = movies.find(({name}) => name === movieName);
            if (movie){
                movie.date = date;
            }
        }
    }
    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}

solve(
   [
    'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
    ]
)

// input 1
//[
//         'addMovie Fast and Furious',
//         'addMovie Godfather',
//         'Inception directedBy Christopher Nolan',
//         'Godfather directedBy Francis Ford Coppola',
//         'Godfather onDate 29.07.2018',
//         'Fast and Furious onDate 30.07.2018',
//         'Batman onDate 01.08.2018',
//         'Fast and Furious directedBy Rob Cohen'
//     ]
//input 2
//    [
//     'addMovie The Avengers',
//         'addMovie Superman',
//         'The Avengers directedBy Anthony Russo',
//         'The Avengers onDate 30.07.2010',
//         'Captain America onDate 30.07.2010',
//         'Captain America directedBy Joe Russo'
//     ]