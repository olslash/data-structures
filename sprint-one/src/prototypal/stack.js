(function(){
 makeStack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var newStack = Object.create(stackMethods);
    newStack.storageSize = 0;
    newStack.storage = {};
    return newStack;
  };

  var stackMethods = {};

  stackMethods.size = function() {
    return this.storageSize;
  };

  stackMethods.push = function(value){
    this.storage[this.storageSize] = value;
    this.storageSize++;
  };

  stackMethods.pop = function(){
    if(this.storageSize > 0) {
      this.storageSize--;
      var val = this.storage[this.storageSize];
      delete this.storage[this.storageSize];

      return val;
    }

    return undefined;
  };

  var start = Date.now();


  var stack = makeStack();
  for (var i = 0; i<1000000; i++) {
    stack.push(i);
    stack.pop();
  }

  console.log('prototypal: ' + (Date.now() - start));
})();
