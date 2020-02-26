
//@Name: Weldensie Embaye (109391)
function MUMIpAddress(){
    
const dns= require("dns");
dns.resolve4('www.mum.edu', (err, address)=>{
    console.log('address:'+ address)
});

}
   
MUMIpAddress();
