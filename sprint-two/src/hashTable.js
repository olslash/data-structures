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
};

HashTable.prototype.hashSize = function(){
  //get the size
  var keyTally;
  this._storage.each(function(e){
    if(e){
      keyTally++;
    }
  });

  return keyTally;
};

HashTable.prototype.checkExpansionNeeded = function(){

};

HashTable.prototype.checkContractionNeeded = function(){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
