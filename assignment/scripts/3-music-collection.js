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

console.log('Added first album', addToCollection('Purple Rain', 'Prince', '1984'));
console.log('Added second album', addToCollection('Enema of the State', 'Blink 182', '1999'));
console.log('Added third album', addToCollection('No Strings Attached', 'NSYNC', '2000'));
console.log('Added fourth album', addToCollection('Abbey Road', 'The Beatles', '1969'));
console.log('Added fifth album', addToCollection('Led Zeppelin IV', 'Led Zeppelin', '1971'));
console.log('Added sixth album', addToCollection('Inside', 'Bo Burnham', '2021'));
console.log(collection);
