const [,, ...args] = process.argv;

let chunkX = args[0];
let chunkZ = args[1];

let regionX = chunkX >> 5;
let regionZ = chunkZ >> 5;

console.log(`r.${regionX}.${regionZ}.mca`);
