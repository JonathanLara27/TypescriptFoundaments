export class Person {
  // private name: string;
  // private lastname: string;
  // private animal: string;
  constructor(
    private name: string,
    private lastname: string,
    private animal: string = "Mamífero"
  ) {}
}

// export class Hero extends Person {
//     constructor(name: string, lastname: string, animal: string, private alterEgo: string) {
//         super(name, lastname, animal);
//     }
// }
export class Hero {
  private person: Person;
  constructor(
    public name: string,
    public lastname: string,
    public animal: string,
    public alterEgo: string
  ) {
    this.person = new Person(name, lastname, animal);
  }
}

const Jonathan = new Hero("Jonathan", "Lara", "Humano", "Superman");

console.log(Jonathan);
