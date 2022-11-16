function storeProvision(input1, input2) {
  let storegesProduct = {};

  for (let i = 0; i < input1.length; i += 2) {
    let currentproduct = input1[i];
    storegesProduct[currentproduct] = Number(input1[i + 1]);
  }

  for (let i = 0; i < input2.length; i += 2) {
    let currentproduct = input2[i];
    if (!storegesProduct.hasOwnProperty(currentproduct)) {
      storegesProduct[currentproduct] = 0;
    }
    storegesProduct[currentproduct] += Number(input2[i + 1]);
  }

  for (const product in storegesProduct) {
    console.log(`${product} -> ${storegesProduct[product]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
