/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
//Sort does NOT return a new array. It returns the ORIGINAL array now sorted. In other words it mutates the array. This is important to remember because sort will actually change your data. You don't need to capture its return value in a variable because the original variable that points to the array will be updated. This is different than the other methods mentioned earlier in this lesson.By default, sort will sort alphabetically
//The takeaway: When we want to sort by something non alphabetical we need to pass sort a callback compare function. That compareFunction requires two arguments and will allow sort return an array based on the return value of those compared elements.

//Let's say the compareFunction takes arguments a and b. If the compareFunction returns less than 0, sort puts a first. If the compareFunction returns greater than 0, sort puts b first. If the compareFunction returns 0, neither elements position is changed.

const sortByRuntimeAscending = (songs) => {
  return songs.sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds);
};
//if(a.runtimeInSeconds < b.runtimeInSeconds){
//return -1
//}
/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
//sort converts all elements into a string
const sortByArtistNameDescending = (songs) => {
  return songs.sort((a, b) => {
    if (a.artist.toLowerCase() > b.artist.toLowerCase()) {
      return -1;
    }
  });
};

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
const sortBySongTitleAscending = (songs) => {
  return songs.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
  });
};

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
