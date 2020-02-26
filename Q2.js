
//@Name: Weldensie Embaye (109391)

function streamBigImage(){
const fs=require('fs');
const path=require('path');

const http= require("http");
const server=http.createServer();
server.on('request', (req, res)=>{
   const src=fs.createReadStream(path.join(__dirname + '/big.JFIF'));
   const writable=fs.createWriteStream(path.join(__dirname + '/newImage.jpg'));

   src.pipe(res);
});

   server.listen(3000);

}

streamBigImage();