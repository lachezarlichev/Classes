function town(input) {
  let info = {};
  for (const line of input) {
    let [town, latitude, longitude] = line.split(" | ");
    info.town = town;
    info.latitude = Number(latitude).toFixed(2);
    info.longitude = Number(longitude).toFixed(2);
    console.log(info);
  }

}
town(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
