function dictionary(array) {
  let output = [];
  let arraytwo = [];
  for (const arrLine of array) {
    let line = JSON.parse(arrLine);
    for (const key in line) {
      output.push(`${key} / ${line[key]}`);
    }

    //console.log(output);
  }
  for (const line of output) {
    let [name, description] = line.split("/");
    //console.log(description);

    arraytwo.push(name);
    arraytwo.sort();


  }
  console.log(arraytwo);
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  '{"Boiler":"A fuel-burning pparatus or container for heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
