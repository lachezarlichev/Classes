function converte(name, lastName, hairColor) {
  let info = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };
  console.log(JSON.stringify(info));
}
converte(
  "George",
  "Jones",

  "Brown"
);
