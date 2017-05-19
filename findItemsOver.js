module.exports = function(list,treshold){
var item =[];
for(var i = 0;i < list.length;i++){
if( list[i].qty > treshold){
 item.push(list[i])
}
}
return item;
}
