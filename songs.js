function songs(input) {
  let numberOfsongs = input.shift();
  let typeList = input.pop();
  for (const line of input) {
    let [typelist, song, time] = line.split("_");
    if ((typeList == "all")) {
      console.log(song);
    }
    if (typeList == typelist) {
      console.log(song);
    }
  }
}
songs([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater']);
