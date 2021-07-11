console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } // end album
  collection.push(album);
  return album;
}

console.log('Added albumOne', collection.albumOne = addToCollection('Purple Rain', 'Prince', '1984'));
console.log('Added albumTwo', collection.albumTwo = addToCollection('Enema of the State', 'Blink 182', '1999'));
console.log('Added albumThree', collection.albumThree = addToCollection('No Strings Attached', 'NSYNC', '2000'));
console.log('Added albumFour', collection.albumFour = addToCollection('Abbey Road', 'The Beatles', '1969'));
console.log('Added albumFive', collection.albumFive = addToCollection('Led Zeppelin IV', 'Led Zeppelin', '1971'));
console.log('Added albumSix', collection.albumSix = addToCollection('Inside', 'Bo Burnham', '2021'));
