function movies(array) {
  let info = [];

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (current.includes("addMovie ")) {
      let name = current.split("addMovie ")[1];
      info.push({ name });
    } else if (current.includes("directedBy")) {
      let [name, director] = current.split(" directedBy ");
      let movie = info.find((el) => el.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (current.includes("onDate")) {
      let [name, date] = current.split(" onDate ");
      let movie = info.find((el) => el.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }
  info.forEach((movies) => {
    if (movies.director && movies.date && movies.name) {
      console.log(JSON.stringify(movies));
    }
  });
}
movies([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);
