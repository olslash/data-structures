var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storageSize = 0;
  this.headIdx = 0;
  this.tailIdx = 0;
};

Queue.prototype.size = function() {
  return this.storageSize;
};

Queue.prototype.enqueue = function(val){
  this.storageSize++;
  this.storage[this.tailIdx] = val;
  this.tailIdx++;
};

Queue.prototype.dequeue = function(){
  if(this.storageSize > 0) {
    this.storageSize--;
    var val = this.storage[this.headIdx];
    delete this.storage[this.headIdx];
    this.headIdx++;
    return val;
  }
  return undefined;
};
