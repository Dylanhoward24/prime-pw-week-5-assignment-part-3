console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }//end album
  collection.push(album);
  return album;
}//end addToCollection

console.log('Added first album', addToCollection('Purple Rain', 'Prince', '1984'));
console.log('Added second album', addToCollection('Enema of the State', 'Blink 182', '1999'));
console.log('Added third album', addToCollection('Let It Be', 'The Beatles', '1970'));
console.log('Added fourth album', addToCollection('Abbey Road', 'The Beatles', '1969'));
console.log('Added fifth album', addToCollection('Led Zeppelin IV', 'Led Zeppelin', '1971'));
console.log('Added sixth album', addToCollection('Inside', 'Bo Burnham', '2021'));
console.log(collection);

function showCollection (collection){
  console.log(collection.length);
  for (const item of collection){
    console.log(item.title, 'by', item.artist, 'published in', item.yearPublished);
  }//end for
}//end showCollection
showCollection(collection);

function findByArtist(artist){
  let results = [];
  for(const item of collection){
    if(artist === item.artist){
      results.push(item);
    }//end if
  }// end for
  return results;
}//end findByArtist

console.log(findByArtist('The Beatles'));
console.log(findByArtist('NSYNC'));
