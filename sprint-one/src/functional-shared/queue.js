var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};

  newQueue.storage = {};
  newQueue.storageSize = 0;
  newQueue.headIdx = 0;
  newQueue.tailIdx = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function (){
  return this.storageSize;
};

queueMethods.enqueue = function(value){
  this.storageSize++;
  this.storage[this.tailIdx] = value;
  this.tailIdx++;
};

queueMethods.dequeue = function(){
  if(this.storageSize > 0) {
    this.storageSize--;
    var returnVal =  this.storage[this.headIdx];
    delete this.storage[this.headIdx];
    this.headIdx++;
    return returnVal;
  }
};



