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

addToCollection('Purple Rain', 'Prince', '1984');
