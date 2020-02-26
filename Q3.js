
//@Name: Weldensie Embaye (109391)

function unZibFile(){
const fs=require('fs');
const path=require('path');

const zlib=require('zlib');
const decompress=zlib.createGunzip();

const readStream=fs.createReadStream(path.join(__dirname + '/question_3.gz'));
const decompressed =fs.createWriteStream(path.join(__dirname + '/question_3.txt'));

readStream.pipe(decompress).pipe(decompressed);

}

unZibFile()