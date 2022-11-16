function employe(array) {
  let info = {};
  for (const name of array) {
    info[name] = name.length;
  }
  for (const key in info) {
    console.log(`Name: ${key} -- Personal Number: ${info[key]}`);
  }
}

employe([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
