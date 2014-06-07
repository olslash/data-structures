var makeBinarySearchTree = function(value){
  var newTree = Object.create(binaryTreeMethods);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(val) {
  var newTreeNode;

  if(val === this.value) { return undefined; }
  if(val < this.value) {
    if(this.left === null) {
      this.left = makeBinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if(this.right === null) {
      this.right = makeBinarySearchTree(val);
    } else {
      this.right.insert(val);
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
    func(currentNode.value);
    // var args = Array.prototype.slice.call(arguments, 1);
    // func.apply(currentNode, arguments);

    if(currentNode.left) { queue.push(currentNode.left); }
    if(currentNode.right) { queue.push(currentNode.right); }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
