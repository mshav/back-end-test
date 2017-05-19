module.exports = function(regPlates,startString){
  var plates = '';
  var correctPlates = [];
  var regPlatelist = regPlates.split(',');
  console.log(regPlatelist)
  for (var i=0;i<regPlatelist.length;i++){

    var regNumber = regPlatelist[i].trim();

    if(regNumber.startsWith(startString)){

      correctPlates.push(regNumber);
       plates = plates + regNumber
    }
  }
}
