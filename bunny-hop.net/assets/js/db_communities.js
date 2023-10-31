// Gamemodes, Statuses, Regions etc.. are separated in order to maintain data updated easily.
// Plus, It's going to be much easier to edit/modify the styles or overall page behavior this way.

const modes = ['Bhop', 'Surf', 'Trikz'];
const statuses = ['Public', 'Whitelist', 'Private'];
const types = ['Server', 'Community'];

// Change the regions up to your preference.
// Might want to re-use regions with country flags.
const regions = ['Europe', 'Russia', 'USA', 'Australia', 'Asia'];

// Static path to assets to optimize the code
const imgPath = '../bunny-hop.net/assets/images';

// All the communities goes there:
export const communities = [
  {
    name: 'SourceJump',
    gamemode: modes[0],
    type: types[1],
    status: 'Public',
    owner: 'Tony Montana',
    discord: 'https://discord.gg/sourcejump',
    region: 'Worldwide',
    img: `${imgPath}/logo-sourcejump.jpg`,
  },
  {
    name: 'bihop',
    gamemode: modes[0],
    type: types[1],
    status: 'Public',
    owner: 'Antosha*',
    discord: 'https://discord.gg/Es4R7uDYEh',
    region: regions[1],
    img: `${imgPath}/logo-bihop.png`,
  },
  {
    name: 'Australis',
    gamemode: modes[0],
    type: types[0],
    status: statuses[0],
    owner: 'SeenKid & Coco',
    discord: 'https://discord.gg/ZbDjVWAEQe',
    region: regions[0],
    img: `${imgPath}/logo-australis.jpg`,
  },
  {
    name: 'FRAGHUNT',
    gamemode: modes[0],
    type: types[0],
    status: statuses[1],
    owner: 'Seytan & Xape',
    discord: 'https://discord.gg/WDjTwb98FD',
    region: regions[0],
    img: `${imgPath}/logo-fraghunt.jpg`,
  },
  {
    name: 'FuckItHops',
    gamemode: modes[0],
    type: types[0],
    status: statuses[0],
    owner: 'fracey & zedii',
    discord: 'https://discord.gg/g6NmKZkhBw',
    region: regions[0],
    img: `${imgPath}/logo-fuckithops.jpg`,
  },
  {
    name: 'WALLAH-HOPS',
    gamemode: modes[0],
    type: types[0],
    status: statuses[1],
    owner: 'Nimmy & frame',
    discord: 'https://discord.gg/YQ3gYNbzc8',
    region: 'N/A',
    img: `${imgPath}/logo-wallah.webp`,
  },
  {
    name: 'Kotyata',
    gamemode: modes[0],
    type: types[0],
    status: statuses[0],
    owner: 'Sautoe & Snuff',
    discord: 'https://discord.gg/Zx9h2GJX4u',
    region: regions[1],
    img: `${imgPath}/logo-kotyata.webp`,
  },
  {
    name: 'The Strafe Database',
    gamemode: modes[0],
    type: types[1],
    status: statuses[0],
    owner: 'Lotus & Dootsi',
    discord: 'https://discord.gg/MyCGE28dxn',
    region: 'Worldwide',
    img: `${imgPath}/logo-strafedb.webp`,
  },
  {
    name: 'Off-Styles Bhoppers',
    gamemode: modes[0],
    type: types[1],
    status: statuses[0],
    owner: 'StarLy',
    discord: 'https://discord.gg/v8Ykbwn2gE',
    region: 'Worldwide',
    img: `${imgPath}/logo-offstyle.webp`,
  },
  {
    name: 'RidgeKrew',
    gamemode: modes[0],
    type: types[0],
    status: statuses[0],
    owner: 'Mølgaard',
    discord: 'https://discord.gg/4BKqEg79Bz',
    region: 'N/A',
    img: `${imgPath}/logo-rk.png`,
  },
  {
    name: 'Entra na B',
    gamemode: modes[0],
    type: types[0],
    status: statuses[0],
    owner: 'M4rquesss',
    discord: 'https://discord.gg/Yj7s5Ut2vj',
    region: 'N/A',
    img: `${imgPath}/logo-entranab.jpg`,
  },
];
