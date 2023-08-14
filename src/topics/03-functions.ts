
function addNumbers(a: number, b: number): number{
    return a + b;
}

const result= addNumbers(10, 20);


const addNumbersArrow = (a: number, b:number): string =>{
    return `wadadadadd ${a+b}`
}

const result2=addNumbersArrow(2,10);

function multiply (a: number, base: number = 2): number{
    return a * base;
}

const result3= multiply(10,10);

console.log({result,result2, result3})

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
    documento: documento;
}

interface documento{
    tipo: string;
    numero: number;
}

const HealCharacter = (character: Character, amount:number) => {
    character.hp += amount;
    // return character.hp;
}

const personaje1: Character = {
    name: 'Pj1',
    hp: 50,
    showHp(){
        console.log(`HP: ${this.hp}`)
    },
    documento: {
        tipo: 'DNI',
        numero: 12345678
    }
}

personaje1.showHp();
HealCharacter(personaje1, 20);
personaje1.showHp();
HealCharacter(personaje1, 30);
personaje1.showHp();

export {}