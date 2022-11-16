function inventory(array) {
  let info = [];
  for (const current of array) {
    let [name, heroLevel, item1] = current.split(" / ");
    let currentHero = {
      name,
      heroLevel: Number(heroLevel),
      item1,
    };
    info.push(currentHero);
  }
  info.sort((a, b) => a.heroLevel - b.heroLevel);
  info.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.heroLevel}`);
    console.log(`items => ${hero.item1}`);
  });
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
