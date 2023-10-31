import { communities } from './db_communities.js';

// by @ Worldspawn
// Generates every community directly from data file.
// So there's no need in 'communities.html'.
//
// Will not take much time to load even bigger amount of communities.

// Could be minimized by using any packer like Webpack or Vite.

const communitySection = document.getElementById('communities-section');

const render = () => {
  communities.map((community) => {
    const { name, gamemode, type, status, owner, discord, img } = community;

    const item = document.createElement('div');
    item.classList.add('item');

    const ul = document.createElement('ul');

    const imageList = document.createElement('li');
    const image = document.createElement('img');
    image.setAttribute('src', img);
    image.classList.add('templatemo-item');
    imageList.append(image);

    const communityList = document.createElement('li');
    const communityName = document.createElement('h4');
    communityName.textContent = name;
    const communitySpan = document.createElement('span');
    communitySpan.textContent = type;
    communityList.append(communityName, communitySpan);

    const gamemodeList = document.createElement('li');
    const gamemodeHeader = document.createElement('h4');
    gamemodeHeader.textContent = 'Gamemode';
    const gamemodeSpan = document.createElement('span');
    gamemodeSpan.textContent = gamemode;
    gamemodeList.append(gamemodeHeader, gamemodeSpan);

    const ownerList = document.createElement('li');
    const ownerHeader = document.createElement('h4');
    ownerHeader.textContent = 'Owner';
    const ownerSpan = document.createElement('span');
    ownerSpan.textContent = owner;
    ownerList.append(ownerHeader, ownerSpan);

    const statusList = document.createElement('li');
    const statusHeader = document.createElement('h4');
    statusHeader.textContent = 'Status';
    const statusSpan = document.createElement('span');
    statusSpan.textContent = status;
    statusList.append(statusHeader, statusSpan);

    const discordList = document.createElement('li');
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('main-border-button');
    const discordAnchor = document.createElement('a');
    discordAnchor.setAttribute('href', discord);
    discordAnchor.textContent = 'Discord';
    buttonDiv.append(discordAnchor);
    discordList.append(buttonDiv);

    ul.append(
      imageList,
      communityList,
      gamemodeList,
      ownerList,
      statusList,
      discordList
    );
    item.append(ul);
    communitySection.append(item);
  });
};

render();
