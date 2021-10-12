/* iteration 5 */

const ages = [22, 18, 24, 55, 65, 21, 12, 13, 90];

let agesFiltered = ages.filter((age) => age >= 18);

console.log(agesFiltered);

const agesPar = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let agesParFiltered = agesPar.filter((age) => age % 2 == 0);

console.log(agesParFiltered);

const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

let stremersFiltered = streamers.filter((streamer) => {
    if (streamer.gameMorePlayed == 'League of Legends') {
        return streamer
    }
});

let stremersIncludesFiltered = streamers.filter((streamer) => {
    if (streamer.name.includes('u')) {
        return streamer
    }
});

console.log(stremersIncludesFiltered);

console.log(stremersFiltered);