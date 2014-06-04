var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.storageSize = 0;
  newQueue.headIdx = 0;
  newQueue.tailIdx = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function () {
  return this.storageSize;
};

queueMethods.enqueue = function (value) {
  this.storage[this.tailIdx] = value;
  this.tailIdx++;
  this.storageSize++;
};

queueMethods.dequeue = function () {
  if (this.storageSize > 0) {
    this.storageSize--;
    var val = this.storage[this.headIdx];
    delete this.storage[this.headIdx];
    this.headIdx++;
    return val;
  }
  return undefined;
};
