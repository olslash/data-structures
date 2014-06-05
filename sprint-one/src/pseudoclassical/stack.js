(function(){
  var Stack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.

    this.storageSize = 0;
    this.storage = {};
  };

  Stack.prototype.size = function() {
    return this.storageSize;
  };

  Stack.prototype.push = function(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  };

  Stack.prototype.pop = function() {
    if(this.storageSize > 0) {
      this.storageSize--;
      var val = this.storage[this.storageSize];
      delete this.storage[this.storageSize];
      return val;
    }
    return undefined;
  };

  var start = Date.now();

  var stack = new Stack();
  for (var i = 0; i<time; i++) {
    stack.push(i);
    stack.pop();
  }

  console.log('pseudoclassical: ' + (Date.now() - start));

})();

