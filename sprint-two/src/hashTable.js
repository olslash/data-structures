var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueList;

  if(!this._storage.get(i)) {
    this._storage.set(i, {});
  }
  valueList = this._storage.get(i);

  if(!valueList.hasOwnProperty(k)) {
    valueList[k] = v;
  }
  console.log(this.hashSize());

  if(this.checkExpansionNeeded()) {
    this.expand();
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var valueList = this._storage.get(i);
  if(valueList.hasOwnProperty(k)) {
    return valueList[k];
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var valueList = this._storage.get(i);

  valueList[k] = null;

  if(this.checkContractionNeeded()) {
    this.contract();
  }
};

HashTable.prototype.hashSize = function(){
  //get the size
  var keyTally = 0;
  this._storage.each(function(e){
    if(e){
      keyTally++;
    }
  });

  return keyTally;
};

HashTable.prototype.checkExpansionNeeded = function(){
  var ceil = Math.floor(this._limit * 0.70);

  return this.hashSize() >= ceil;
};

HashTable.prototype.expand = function(){
  // todo: REFACTOR THIS
  var newLimit = this._limit * 2;
  var newStorage = makeLimitedArray(newLimit);

  this._storage.each(function(e){
    for (var k in e) {
      var valueList;
      var i = getIndexBelowMaxForKey(k, newLimit);
      if(!newStorage.get(i)) {
        newStorage.set(i, {});
      }
      debugger;
      valueList = newStorage.get(i);

      if(!valueList.hasOwnProperty(k)) {
        valueList[k] = e[k];
      }
    }
  });
  this._limit = newLimit;
  this._storage = newStorage;
};

HashTable.prototype.checkContractionNeeded = function(){
  var minimumSize = 8;

  var floor = Math.floor(this._limit * 0.45);

  return this._limit > minimumSize ? this.hashSize() <= floor : false;
};

HashTable.prototype.contract = function(){
  var newLimit = this._limit / 2;
  var newStorage = makeLimitedArray(newLimit);

  this._storage.each(function(e){
    // every subobject in our currenet storage
    for (var k in e) {
      //for every key in the subobject
      var valueList;

      var i = getIndexBelowMaxForKey(k, newLimit);
      if(!newStorage.get(i)) {
        newStorage.set(i, {});
      }

      valueList = newStorage.get(i);

      if(!valueList.hasOwnProperty(k)) {
        valueList[k] = e[k];
      }

    }
  });

  this._limit = newLimit;
  this._storage = newStorage;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
