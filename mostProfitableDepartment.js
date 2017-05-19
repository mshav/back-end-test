module.exports = function(salesData){
  var hardwareValue = [];
  	var outdoorValue = [];
  	var carpentryValue = [];

  	var hardwareCount = 0;
  	var outdoorCount = 0;
  	var carpentryCount = 0;
  	for (var i=0; i<salesData.length; i++){
      var curObj = salesData[i]; // curObj is the 'i' value which will be the index
     	var ObjectDep = curObj.department; //call the department for each index
      var ObjectSales = curObj.sales; // call the sales for each index

      if (ObjectDep == 'hardware'){
        hardwareValue.push(ObjectSales);

      } else if(ObjectDep == 'carpentry'){
      	carpentryValue.push(ObjectSales);

      } else if(ObjectDep == 'outdoor'){
      	outdoorValue.push(ObjectSales);
      }

    }

    for (var a=0; a<hardwareValue.length; a++){
    	hardwareTotal = hardwareValue[a] ;
    	hardwareCount = hardwareCount + hardwareTotal;

    	var outdoorTotal = outdoorValue[a] ;
    	outdoorCount = outdoorCount + outdoorTotal;

    	var carpentryTotal = carpentryValue[a] ;
    	carpentryCount = carpentryCount + carpentryTotal;
}
}
