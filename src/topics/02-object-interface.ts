const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string,
    hpPoints: number,
    skills: string[],
    hometown?: string
}

const strider: Character = {
    name: 'Strider',
    hpPoints: 100,
    skills: skills,
}

strider.hometown = 'Gondor';

console.table(strider);


export {}