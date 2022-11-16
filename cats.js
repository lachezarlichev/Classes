function cats(input) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const lineArr of input) {
    let arr = lineArr.split(" ");
    let name = arr[0];
    let age = Number(arr[1]);
    let cat = new Cat(name, age);
    cat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
