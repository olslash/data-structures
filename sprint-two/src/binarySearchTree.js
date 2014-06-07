var makeBinarySearchTree = function(value){
  var newTree = Object.create(binaryTreeMethods);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(val) {
  this._insert(val);

  var depth = this.getDepth();
  if(depth.max > (depth.min * 2)) {
    this.rebalance();
  }
};

binaryTreeMethods._insert = function(val) {
  var newTreeNode;

  if(val === this.value) { return undefined; }
  if(val < this.value) {
    if(this.left === null) {
      this.left = makeBinarySearchTree(val);
    } else {
      this.left._insert(val);
    }
  } else if (val > this.value) {
    if(this.right === null) {
      this.right = makeBinarySearchTree(val);
    } else {
      this.right._insert(val);
    }
  }
};

binaryTreeMethods.contains = function(val) {
  if(this.value === val) { return true; }

  if(val < this.value) {
    if(this.left) {
      return this.left.contains(val);
    }
  } else {
    if(this.right) {
      return this.right.contains(val);
    }
  }

  return false;
};

binaryTreeMethods.depthFirstLog = function(func) {
  func(this.value);

  if(this.left) { this.left.depthFirstLog(func); }
  if(this.right) { this.right.depthFirstLog(func); }
};

binaryTreeMethods.breadthFirstLog = function(func) {
  var queue = [];
  queue.push(this);

  while(queue.length > 0) {
    var currentNode = queue.shift();
    // func(currentNode.value);
    var args = Array.prototype.slice.call(arguments, 1);
    args.unshift(currentNode.value);
    func.apply(null, args);

    if(currentNode.left) { queue.push(currentNode.left); }
    if(currentNode.right) { queue.push(currentNode.right); }
  }
};

binaryTreeMethods.getDepth = function() {
  var result = {max: 1, min: 1};

  var rightDepth = {max: 0, min: 0};
  var leftDepth = rightDepth;

  if(this.left === null && this.right === null) {
    return result;
  }

  if(this.left !== null) { leftDepth = this.left.getDepth(); }

  if(this.right !== null) { rightDepth = this.right.getDepth(); }

  result.max = Math.max(leftDepth.max, rightDepth.max) + 1;
  result.min = Math.min(leftDepth.min, rightDepth.min) + 1;

  return result;
};

binaryTreeMethods.getSortedList = function() {
  var sorted = [];

  // var traverse = function () {
  //   if(this.left) { this.left.getSortedList(); }
  //   sorted.push(this.value);
  //   if(this.right) { this.right.getSortedList(); }
  // };

  if(this.left) { sorted.push(this.left.getSortedList()); }
  sorted.push(this.value);
  if(this.right) { sorted.push(this.right.getSortedList()); }

  return _.flatten(sorted);
};

binaryTreeMethods.rebalance = function (){
  var sorted = this.getSortedList();

  var newRoot;

  var buildTree = function (sortedArr){
    if (sortedArr.length === 0){ return; }
    var medianIdx = Math.floor((sortedArr.length - 1)/ 2);
    var medianVal = sortedArr[medianIdx];

    if (!newRoot) {
      newRoot = makeBinarySearchTree(medianVal);
    } else {
      newRoot._insert(medianVal);
    }

    buildTree(sortedArr.slice(0, medianIdx));
    buildTree(sortedArr.slice(medianIdx + 1));
  };

  buildTree(sorted);

  //Modify the node we were called on.
  this.value = newRoot.value;
  this.left = newRoot.left;
  this.right = newRoot.right;

  //TODO: for testing. Remove.
  return newRoot;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
