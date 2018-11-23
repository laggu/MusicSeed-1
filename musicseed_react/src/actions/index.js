// Main
export const selectMenu = menu => {
  return {
    type: 'MENU_SELECTED',
    payload: menu,
  };
};

// Player
export const searchKeyword = keyword => {
  return {
    type: 'KEYWORD_SEARCHED',
    payload: keyword,
  };
};

export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

// Buttons
export const addSongToPlaylist = song => {
  return {
    type: 'SONG_ADDED_TO_PLAYLIST',
    payload: song,
  }
};

export const downloadSong = song => {
  return {
    type: 'SONG_DOWNLOADED',
    payload: song,
  }
};

export const playSong = song => {
  return {
    type: 'SONG_PLAYED',
    payload: song,
  }
};

