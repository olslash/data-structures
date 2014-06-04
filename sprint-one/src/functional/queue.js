var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var headIdx = 0;
  var tailIdx = 0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    size++;
    storage[tailIdx] = value;
    tailIdx++;
  };

  someInstance.dequeue = function(){
    if (size > 0){
      size--;
    }
    var val = storage[headIdx];
    delete storage[headIdx];
    headIdx++;
    return val;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
