var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storedSize = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  // newStack.size = stackMethods.size;

  return newStack;
};

var stackMethods = {};

stackMethods.size = function(){
  return this.storedSize;
};

stackMethods.push = function(item){
  this.storage[this.storedSize] = item;
  this.storedSize++;
};

stackMethods.pop = function(){
  if(this.storedSize > 0) {
    this.storedSize--;
    var storedItem = this.storage[this.storedSize];
    delete this.storage[this.storedSize];
    return storedItem;
  }
  return undefined;
};
