/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
//every is another JS array method that checks to see if every single element in the array meets a certain condition. Like forEach, map, and filter it also takes in a callback function
//Every evaluates to a Boolean.

// Note: Just like with map, forEach, and filter, the callback that every takes in will also be automatically passed an optional index argument.

// The every method's callback also needs to return something, otherwise all values would be falsy by default (because it'd return undefined) and it would evaluate to false.

const allSongsAreOverTwoMinutes = (songs) => {
  return songs.every((song) => {
    return song.runtimeInseconds > 120;
  });
};

/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
const anySongIsOverFourMinutes = (songs) => {
  return songs.some((song) => {
    return song.runtimeInseconds > 240;
  });
};

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsByPeanut(songs) {
  return songs.some((song) => {
    return song.artist === "Peanut";
  });
}

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
