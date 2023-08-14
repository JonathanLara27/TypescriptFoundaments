interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Gecko",
    details: {
        author: 'Oliver Heldens',
        year: 2013
    }
}
const {song: cancion, audioVolume: volumen} = audioPlayer;
const {details: {author}} = audioPlayer;
// const {author, year} = detalles;
console.log(author,cancion,volumen)


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3, p4 = 'Not found'] = dbz;
const [ , , trunks] = dbz;

console.table(dbz);
console.log({p1,p2,p3})
console.log(`Personaje 4: ${p4 || 'No existe'}`)
console.log(`Personaje 3: ${trunks || 'No existe'}`)
export {}