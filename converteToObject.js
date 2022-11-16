function converte(input) {
  let info = JSON.parse(input);
  for (const key of Object.keys(info)) {
    console.log(`${key}: ${info[key]}`);
  }
}
converte('{"name": "George", "age": 40, "town": "Sofia"}');
