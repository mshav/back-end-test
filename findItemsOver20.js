module.exports = function(items, threshold) {
  var threshList = [];
  for (i = 0; i < items.length; i++) {
    var fruit = items[i];
    var name = fruit.name;
    var quantity = fruit.qty;
    if (quantity > threshold) {
      threshList.push(items[i]);
    };
  };
  console.log(JSON.stringify(threshList));
  return threshList;
};
