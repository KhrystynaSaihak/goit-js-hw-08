import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';

const setStorageData = timeData => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(timeData));
};

const getStorageData = () => {
  if (localStorage.getItem(STORAGE_KEY)) {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
  return false;
};

const savedCurrentTime = getStorageData();

if (savedCurrentTime) {
  player.setCurrentTime(savedCurrentTime.seconds);
}

const throttleStorageData = throttle(setStorageData, 1000);

player.on('timeupdate', throttleStorageData);
