var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = makeTree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  if(this.value === target) { return true; }

  return _.reduce(this.children, function(found, currentTree){
    if(!found) {
      return currentTree.contains(target);
    } else {
      return true;
    }
  }, false);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
